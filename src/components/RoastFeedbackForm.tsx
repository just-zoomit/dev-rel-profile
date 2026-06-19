import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Flame, ExternalLink } from "lucide-react";

const schema = z.object({
  rating: z.enum(["1", "2", "3", "4", "5"]),
  worked: z.string().min(1, "Tell me at least one thing that worked"),
  didnt: z.string().min(1, "What didn't work?"),
  codeNotes: z.string().optional(),
  suggestions: z.string().optional(),
  roaster: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

interface RoastFeedbackFormProps {
  appTitle: string;
  repo: string;
  onSubmitted: () => void;
}

const RoastFeedbackForm = ({ appTitle, repo, onSubmitted }: RoastFeedbackFormProps) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { rating: "3" },
  });

  const buildIssueUrl = (values: FormValues) => {
    const stars = "⭐".repeat(Number(values.rating));
    const sections = [
      `## Overall: ${stars} (${values.rating}/5)`,
      "",
      "### What worked",
      values.worked,
      "",
      "### What didn't work",
      values.didnt,
    ];
    if (values.codeNotes?.trim()) {
      sections.push("", "### Code & docs notes", values.codeNotes);
    }
    if (values.suggestions?.trim()) {
      sections.push("", "### Suggestions", values.suggestions);
    }
    sections.push(
      "",
      "---",
      values.roaster?.trim()
        ? `Roasted by **${values.roaster}** via the Roast My App page.`
        : "Submitted via the Roast My App page.",
    );

    const params = new URLSearchParams({
      title: `Roast: ${appTitle} (${values.rating}/5)`,
      body: sections.join("\n"),
      labels: "feedback",
    });
    return `https://github.com/${repo}/issues/new?${params.toString()}`;
  };

  const onSubmit = (values: FormValues) => {
    window.open(buildIssueUrl(values), "_blank", "noopener,noreferrer");
    onSubmitted();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label>Overall rating</Label>
        <Controller
          control={control}
          name="rating"
          render={({ field }) => (
            <RadioGroup
              value={field.value}
              onValueChange={field.onChange}
              className="flex gap-4"
            >
              {["1", "2", "3", "4", "5"].map((n) => (
                <div key={n} className="flex items-center gap-1.5">
                  <RadioGroupItem value={n} id={`rating-${n}`} />
                  <Label htmlFor={`rating-${n}`} className="font-normal cursor-pointer">
                    {n}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          )}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="worked">What worked well? *</Label>
        <Textarea
          id="worked"
          rows={3}
          placeholder="DX, docs, code clarity, anything that surprised you positively..."
          {...register("worked")}
        />
        {errors.worked && (
          <p className="text-sm text-destructive">{errors.worked.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="didnt">What didn't? *</Label>
        <Textarea
          id="didnt"
          rows={3}
          placeholder="Friction points, confusing parts, things you had to figure out..."
          {...register("didnt")}
        />
        {errors.didnt && (
          <p className="text-sm text-destructive">{errors.didnt.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="codeNotes">Code & docs notes (optional)</Label>
        <Textarea
          id="codeNotes"
          rows={3}
          placeholder="File-level callouts, naming, structure, missing docs..."
          {...register("codeNotes")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="suggestions">Suggestions (optional)</Label>
        <Textarea
          id="suggestions"
          rows={3}
          placeholder="What would you change if it were your repo?"
          {...register("suggestions")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="roaster">Your name or handle (optional)</Label>
        <Input
          id="roaster"
          placeholder="So I can credit you in the response"
          {...register("roaster")}
        />
      </div>

      <Button type="submit" variant="accent" className="w-full" size="lg">
        <Flame className="mr-2 h-4 w-4" />
        Open pre-filled GitHub issue
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
      <p className="text-xs text-muted-foreground text-center">
        Opens in a new tab with your feedback pre-filled. Review it, then click
        "Submit new issue" on GitHub.
      </p>
    </form>
  );
};

export default RoastFeedbackForm;
