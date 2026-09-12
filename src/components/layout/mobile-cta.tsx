import { MessageCircle, Phone } from "lucide-react";
import { company } from "@/data/company";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 p-2 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href={`tel:${company.phones[0].e164}`}
          className="flex min-h-11 items-center justify-center gap-2 rounded-sm bg-gold text-sm font-medium text-background"
        >
          <Phone className="size-4" />
          Call
        </a>
        <a
          href={`https://wa.me/${company.whatsapp}`}
          className="flex min-h-11 items-center justify-center gap-2 rounded-sm border border-gold/50 text-sm font-medium text-gold"
        >
          <MessageCircle className="size-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
