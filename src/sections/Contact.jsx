import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiCheck, FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { profile } from "../data/profile";

const EMAILJS_SERVICE = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
const isEmailJsConfigured = ![EMAILJS_SERVICE, EMAILJS_TEMPLATE, EMAILJS_PUBLIC_KEY].some((value) =>
  value.startsWith("YOUR_")
);

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.66, ease: [0.22, 1, 0.36, 1] } },
};

const viewport = { once: true, amount: 0.16 };

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = "Name is required";
    if (!form.email.trim()) nextErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Invalid email address";
    if (!form.message.trim()) nextErrors.message = "Message is required";
    else if (form.message.trim().length < 10) nextErrors.message = "At least 10 characters";
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (errors[name]) setErrors((current) => ({ ...current, [name]: "" }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setStatus("sending");
    if (!isEmailJsConfigured) {
      const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("idle");
      return;
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error(error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="page-section bg-[#090909] pb-12">
      <div className="section-inner">
        <motion.div variants={fade} initial="hidden" whileInView="visible" viewport={viewport} className="grid grid-cols-1 gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
          <div>
            <p className="section-kicker">06 / Contact</p>
            <h2 className="mt-10 max-w-[850px] text-[clamp(4rem,10vw,10rem)] font-bold leading-[0.86] tracking-[-0.07em] text-[var(--ink)]">
              Build the next thing.
            </h2>

            <div className="mt-12 max-w-[560px] border-l border-[var(--line)] pl-6">
              <p className="quiet-copy">
                Open to frontend, full stack, and API engineering opportunities where design
                quality and implementation discipline both matter.
              </p>
            </div>

            <div className="mt-12 grid max-w-[720px] grid-cols-1 gap-px overflow-hidden border border-[var(--line-soft)] bg-[var(--line-soft)] sm:grid-cols-3">
              {[
                { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: FiMail },
                { label: "GitHub", value: "mnataraj2006", href: profile.github, icon: FiGithub },
                { label: "LinkedIn", value: "linkedin.com/in/mnataraj", href: profile.linkedin, icon: FiLinkedin },
              ].map(({ label, value, href, icon: Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group bg-[#101011] p-5">
                  <Icon size={17} className="text-[var(--ink-muted)]" />
                  <p className="mono-label mt-8">{label}</p>
                  <p className="mt-2 flex items-center justify-between gap-4 text-sm font-semibold text-[var(--ink-soft)]">
                    {value}
                    <FiArrowUpRight className="text-[var(--ink-faint)] transition-colors group-hover:text-[var(--ink)]" size={14} />
                  </p>
                </a>
              ))}
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} noValidate className="self-end border-t border-[var(--line-soft)] pt-8 lg:mt-36">
            <p className="mono-label mb-8">Message</p>

            {status === "success" && (
              <div className="mb-6 flex items-center gap-2 border border-[var(--line)] bg-white/[0.025] p-3 text-sm text-[var(--ink-soft)]">
                <FiCheck size={15} /> Message sent. I will get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="mb-6 border border-[var(--line)] bg-white/[0.025] p-3 text-sm text-[var(--ink-muted)]">
                Something went wrong. Email me directly at {profile.email}.
              </div>
            )}

            <div className="grid grid-cols-1 gap-7">
              <label>
                <span className="mono-label">Name</span>
                <input id="contact-name" type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" className="form-input" />
                {errors.name && <span className="mt-2 block text-xs text-[var(--ink-muted)]">{errors.name}</span>}
              </label>

              <label>
                <span className="mono-label">Email</span>
                <input id="contact-email" type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" className="form-input" />
                {errors.email && <span className="mt-2 block text-xs text-[var(--ink-muted)]">{errors.email}</span>}
              </label>

              <label>
                <span className="mono-label">Brief</span>
                <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} placeholder="Tell me what you are building..." className="form-input" />
                {errors.message && <span className="mt-2 block text-xs text-[var(--ink-muted)]">{errors.message}</span>}
              </label>
            </div>

            <button type="submit" id="contact-submit" disabled={status === "sending"} className="micro-button primary mt-9 w-full disabled:cursor-not-allowed disabled:opacity-50">
              {status === "sending" ? "Sending..." : <><FiSend size={15} /> Send message</>}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

