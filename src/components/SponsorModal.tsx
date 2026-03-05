import { useState} from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./../components/ui/dialog";
import { Button } from "./../components/ui/button";
import { Input } from "./../components/ui/input";
import { Label } from "./../components/ui/label";
import { Textarea } from "./../components/ui/textarea";
import { useToast } from "./../hooks/use-toast";
import { CheckCircle, Loader2 } from "lucide-react";
import type { FormEvent } from "react";
interface SponsorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validateName = (name: string) => name.trim().length >= 2 && name.trim().length <= 100;

const SponsorModal = ({ open, onOpenChange }: SponsorModalProps) => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ yourName: "", yourEmail: "", sponsorName: "", sponsorEmail: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!validateName(form.yourName)) errs.yourName = "Name must be 2–100 characters";
    if (!validateEmail(form.yourEmail)) errs.yourEmail = "Enter a valid email address";
    if (!validateEmail(form.sponsorEmail)) errs.sponsorEmail = "Enter a valid sponsor email";
    if (form.sponsorName && !validateName(form.sponsorName)) errs.sponsorName = "Name must be 2–100 characters";
    if (form.message.length > 500) errs.message = "Message must be under 500 characters";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setSubmitted(true);
      setLoading(false);
      toast({ title: "Sponsor request sent! 🙌" });
    }, 600);
  };

  const handleClose = (val: boolean) => {
    if (!val) {
      setSubmitted(false);
      setForm({ yourName: "", yourEmail: "", sponsorName: "", sponsorEmail: "", message: "" });
      setErrors({});
    }
    onOpenChange(val);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        {submitted ? (
          <div className="text-center py-6">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
            <DialogHeader>
              <DialogTitle className="text-2xl font-heading">Request Sent!</DialogTitle>
              <DialogDescription className="text-base mt-2">
                We've prepared a sponsor link. Share it with your sponsor to get started.
              </DialogDescription>
            </DialogHeader>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-heading">Request A Sponsor</DialogTitle>
              <DialogDescription>Send a sponsorship request to someone who believes in your career.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <Label htmlFor="sp-name">Your Name *</Label>
                <Input id="sp-name" value={form.yourName} onChange={(e) => setForm({ ...form, yourName: e.target.value })} placeholder="Your full name" />
                {errors.yourName && <p className="text-sm text-destructive mt-1">{errors.yourName}</p>}
              </div>
              <div>
                <Label htmlFor="sp-email">Your Email *</Label>
                <Input id="sp-email" type="email" value={form.yourEmail} onChange={(e) => setForm({ ...form, yourEmail: e.target.value })} placeholder="you@email.com" />
                {errors.yourEmail && <p className="text-sm text-destructive mt-1">{errors.yourEmail}</p>}
              </div>
              <div>
                <Label htmlFor="sp-s-name">Sponsor's Name</Label>
                <Input id="sp-s-name" value={form.sponsorName} onChange={(e) => setForm({ ...form, sponsorName: e.target.value })} placeholder="Their name" />
                {errors.sponsorName && <p className="text-sm text-destructive mt-1">{errors.sponsorName}</p>}
              </div>
              <div>
                <Label htmlFor="sp-s-email">Sponsor's Email *</Label>
                <Input id="sp-s-email" type="email" value={form.sponsorEmail} onChange={(e) => setForm({ ...form, sponsorEmail: e.target.value })} placeholder="sponsor@email.com" />
                {errors.sponsorEmail && <p className="text-sm text-destructive mt-1">{errors.sponsorEmail}</p>}
              </div>
              <div>
                <Label htmlFor="sp-msg">Personal Message</Label>
                <Textarea id="sp-msg" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Why this matters to you..." rows={3} maxLength={500} />
                {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
              </div>
              <Button type="submit" variant="cta" className="w-full" size="lg" disabled={loading}>
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : "Send Sponsor Request"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SponsorModal;
