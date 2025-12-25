import { MessageCircleMore } from "lucide-react";
const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+918077533278";
const presetMessage =
  process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE ||
  "Hi KoDude team! I'd love to talk about a project.";

const sanitizedNumber = phoneNumber.replace(/[^\d]/g, "");
const whatsappLink = `https://wa.me/${sanitizedNumber}?text=${encodeURIComponent(
  presetMessage
)}`;

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 group inline-flex items-center gap-3 rounded-full bg-[#25d366] px-4 py-3 text-sm font-medium text-white shadow-[0_20px_60px_rgba(18,140,126,0.4)] transition hover:translate-y-[-2px] hover:shadow-[0_24px_80px_rgba(18,140,126,0.55)]"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
        {/* <MessageCircleMore size={24} className="text-white" /> */}
        {/* <svg
          aria-hidden="true"
          viewBox="0 0 32 32"
          className="h-6 w-6 fill-white"
        >
          <path d="M16 3C9.383 3 4 8.383 4 15c0 2.451.706 4.809 2.043 6.847L4.5 29.5l7.816-1.503A12.01 12.01 0 0 0 16 27c6.617 0 12-5.383 12-12S22.617 3 16 3Zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10a9.99 9.99 0 0 1-3.651-.692l-.391-.154-4.465.859.865-4.2-.198-.32A9.942 9.942 0 0 1 6 15c0-5.514 4.486-10 10-10Zm4.93 5.215c-.219-.488-.45-.498-.662-.507-.172-.007-.368-.007-.564-.007s-.52.074-.792.367c-.273.293-1.04 1.018-1.04 2.48c0 1.462 1.064 2.874 1.212 3.071c.149.195 2.056 3.288 5.083 4.477c.717.297 1.275.475 1.712.607c.72.227 1.375.196 1.896.118c.579-.086 1.79-.732 2.043-1.438c.252-.707.252-1.312.176-1.438c-.074-.125-.273-.196-.573-.343c-.3-.148-1.791-.883-2.068-.983c-.275-.098-.475-.148-.673.149c-.198.294-.771.98-.945 1.18c-.173.197-.347.223-.646.074c-.3-.148-1.261-.46-2.402-1.466c-.887-.79-1.48-1.764-1.653-2.06c-.173-.296-.018-.457.13-.604c.134-.133.3-.347.45-.52c.15-.173.2-.296.3-.494c.099-.197.05-.37-.025-.519c-.074-.148-.652-1.6-.892-2.187Z" />
        </svg> */}
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          className="fill-white"
        >
          <title>WhatsApp icon</title>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      </span>
      {/* <div className="flex flex-col text-left leading-tight">
        <span className="text-xs uppercase tracking-wide text-white/80">
          Chat with us
        </span>
        <span className="text-sm font-semibold">WhatsApp now</span>
      </div> */}
    </a>
  );
}
