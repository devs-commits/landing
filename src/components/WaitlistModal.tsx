import { useState} from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "../components/ui/dialog";
import { Button } from "./../components/ui/button";
import { Input } from "./../components/ui/input";
import { Label } from "./../components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./../components/ui/select";
import { useToast } from "./../hooks/use-toast";
import { CheckCircle, Loader2 } from "lucide-react";
import type { FormEvent } from "react";

interface WaitlistModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validateName = (name: string) => name.trim().length >= 2 && name.trim().length <= 100;
const validatePhone = (phone: string) => !phone || /^\+?[\d\s\-()]{7,20}$/.test(phone);

const WaitlistModal = ({ open, onOpenChange }: WaitlistModalProps) => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [position, setPosition] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", phone: "", track: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!validateName(form.name)) errs.name = "Name must be 2–100 characters";
    if (!validateEmail(form.email)) errs.email = "Enter a valid email address";
    if (!validatePhone(form.phone)) errs.phone = "Enter a valid phone number";
    if (!form.track) errs.track = "Please select a track";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    const pos = Math.floor(Math.random() * 400) + 50;
    setTimeout(() => {
      setPosition(pos);
      setSubmitted(true);
      setLoading(false);
      toast({ title: "You're on the waitlist! 🎉" });
    }, 600);
  };

  const handleClose = (val: boolean) => {
    if (!val) {
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", track: "" });
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
              <DialogTitle className="text-2xl font-heading">You're In!</DialogTitle>
              <DialogDescription className="text-base mt-2">
                Your position on the waitlist:
              </DialogDescription>
            </DialogHeader>
            <p className="text-5xl font-heading font-bold text-accent mt-4">#{position}</p>
            <p className="text-sm text-muted-foreground mt-4">We'll notify you when your desk is ready.</p>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-heading">Secure Your Desk</DialogTitle>
              <DialogDescription>Join the waitlist. Only 1,000 desks per batch.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div>
                <Label htmlFor="wl-name">Full Name *</Label>
                <Input id="wl-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" />
                {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
              </div>
              <div>
                <Label htmlFor="wl-email">Email *</Label>
                <Input id="wl-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
              </div>
              <div>
                <Label htmlFor="wl-phone">Phone (optional)</Label>
                <Input id="wl-phone" type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+234..." />
                {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
              </div>
              <div>
                <Label>Choose Your Track *</Label>
                <Select value={form.track} onValueChange={(v) => setForm({ ...form, track: v })}>
                  <SelectTrigger><SelectValue placeholder="Select a track" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                    <SelectItem value="data-analytics">Data Analytics</SelectItem>
                    <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                  </SelectContent>
                </Select>
                {errors.track && <p className="text-sm text-destructive mt-1">{errors.track}</p>}
              </div>
              <Button type="submit" variant="cta" className="w-full" size="lg" disabled={loading}>
                {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Securing...</> : "Secure My Spot"}
              </Button>
              <p className="text-xs text-center text-muted-foreground">No credit card required.</p>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
