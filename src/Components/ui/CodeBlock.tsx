import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CodeBlockProps = {
  code: string;
  fileName?: string;
  language?: string;
};

const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  fileName = "snippet.ts",
  language = "tsx",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      console.error("Failed to copy code", error);
    }
  };

  return (
    <div className="relative rounded-2xl border border-slate-200 bg-[#0b1221] text-slate-100 shadow-inner shadow-slate-900/30">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs uppercase tracking-wide text-slate-300">
        <span>
          {fileName}{" "}
          <span className="text-slate-500 lowercase">({language})</span>
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 rounded-md border border-white/20 px-2 py-1.5 text-[11px] font-medium text-white transition-all ease-in-out cursor-pointer hover:border-emerald-400 hover:text-emerald-300"
        >
          {copied ? (
            <>
              <Check size={12} /> Copied
            </>
          ) : (
            <>
              <Copy size={12} /> Copy
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto px-4 py-3 text-sm leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
