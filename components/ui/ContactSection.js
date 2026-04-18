import { Mail, MapPin, Phone } from "lucide-react";

function InfoItem({ icon, title, lines }) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-slate-200">
        <div className="text-[#003580]">{icon}</div>
      </div>

      <div>
        <p className="text-lg font-black text-slate-900">{title}</p>
        <p className="mt-1 text-sm leading-relaxed text-slate-500">
          {lines.map((line, idx) => (
            <span key={idx}>
              {line}
              {idx !== lines.length - 1 ? <br /> : null}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-black text-slate-900">{label}</span>
      {children}
    </label>
  );
}

function Input(props) {
    return (
        <input
        {...props}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#003580] focus:ring-2 focus:ring-[#003580]/20"
        />
    );
    }

    function Textarea(props) {
    return (
        <textarea
        {...props}
        className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:border-[#003580] focus:ring-2 focus:ring-[#003580]/20"
        />
    );
    }

    export default function ContactSection() {
    return (
        <section
        id="contact-section"
        className="scroll-mt-28 rounded-[2.5rem] bg-transparent"
        >
        {/* Header */}
        <div className="text-center">
            <h1
            className="text-slate-900 font-black tracking-[-0.04em] leading-[0.9]"
            style={{ fontSize: "clamp(40px, 4vw, 60px)" }}
            >
            Contact us
            </h1>

            <p className="mx-auto mt-3 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-500">
            With lots of unique blocks, you can easily build a page without coding.
            <br />
            Build your next consultancy website within few minutes.
            </p>
        </div>

        {/* Info blocks + form */}
        <div className="mt-8 rounded-[2.5rem] bg-[#EEF4FF] px-6 py-10 md:px-10">
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-3">
            <InfoItem
                icon={<Phone className="h-5 w-5" />}
                title="Call us"
                lines={["+1-940-394-2948", "+1-389-385-3807"]}
            />
            <InfoItem
                icon={<Mail className="h-5 w-5" />}
                title="Email us"
                lines={["support@brainwave.io", "contact@brainwave.io"]}
            />
            <InfoItem
                icon={<MapPin className="h-5 w-5" />}
                title="Visit us"
                lines={["34 Madison Street,", "NY, USA 10005"]}
            />
            </div>

            <div className="mx-auto mt-10 max-w-5xl rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 md:p-10">
            <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field label="First & Last Name">
                    <Input type="text" placeholder="i.e. John Doe" />
                </Field>

                <Field label="Email">
                    <Input type="email" placeholder="i.e. john@email.com" />
                </Field>

                <Field label="Phone Number">
                    <Input type="text" placeholder="i.e. +1-234-567-7890" />
                </Field>

                <Field label="Subject">
                    <Input type="text" placeholder="i.e. I need help" />
                </Field>
                </div>

                <Field label="Message">
                <Textarea rows={4} placeholder="Type your message" />
                </Field>

                <div>
                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-xl bg-[#003580] px-10 py-3 text-sm font-black text-white transition hover:bg-[#002a66] focus:outline-none focus:ring-2 focus:ring-[#003580]/30"
                >
                    Send
                </button>
                </div>
            </form>
            </div>
        </div>
        </section>
    );
}