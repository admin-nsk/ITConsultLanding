"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

type FreeConsultModalProps = {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

export function FreeConsultModal({ isOpen, onOpenChange }: FreeConsultModalProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeConsent, setAgreeConsent] = useState(false);

  async function handleSubmit() {
    setError(null);
    setSuccess(false);
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError("Заполните все поля");
      return;
    }
    if (!agreePrivacy) {
      setError("Необходимо согласие с политикой обработки персональных данных");
      return;
    }
    if (!agreeConsent) {
      setError("Необходимо согласие на обработку персональных данных");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(`/api/v1/contacts/freeconsult`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name.trim(), phone: phone.trim(), email: email.trim() }),
      });
      if (!res.ok) {
        const detail = await res.text();
        throw new Error(detail || "Request failed");
      }
      setSuccess(true);
      setName("");
      setPhone("");
      setEmail("");
      setAgreePrivacy(false);
      setAgreeConsent(false);
      setTimeout(() => onOpenChange(false), 1200);
    } catch (e: any) {
      setError(e?.message || "Ошибка отправки");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Бесплатная консультация</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Имя</label>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Иван" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Телефон</label>
            <Input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+7 900 000-00-00" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" />
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-2">
              <Checkbox
                id="modal-privacy-policy"
                checked={agreePrivacy}
                onCheckedChange={(checked) => setAgreePrivacy(checked === true)}
              />
              <label
                htmlFor="modal-privacy-policy"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Согласен с{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80"
                  onClick={(e) => e.stopPropagation()}
                >
                  политикой обработки персональных данных
                </a>
              </label>
            </div>
            <div className="flex items-start space-x-2">
              <Checkbox
                id="modal-consent"
                checked={agreeConsent}
                onCheckedChange={(checked) => setAgreeConsent(checked === true)}
              />
              <label
                htmlFor="modal-consent"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
              >
                Согласен на{" "}
                <a
                  href="/consent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline hover:text-primary/80"
                  onClick={(e) => e.stopPropagation()}
                >
                  обработку персональных данных
                </a>
              </label>
            </div>
          </div>
          
          {error && <div className="text-sm text-red-500">{error}</div>}
          {success && <div className="text-sm text-green-600">Заявка отправлена!</div>}
          <Button className="w-full" disabled={isSubmitting} onClick={handleSubmit}>
            {isSubmitting ? "Отправка..." : "Отправить"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}


