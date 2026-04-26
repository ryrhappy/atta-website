"use client";

import * as Dialog from "@radix-ui/react-dialog";

type ContactCooperateButtonProps = {
  className: string;
};

/**
 * 合作联系按钮：点击后弹出联系人信息弹窗。
 */
export default function ContactCooperateButton({ className }: ContactCooperateButtonProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className={className}>
          联系合作
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[70] bg-[#030A16]/70 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[80] w-[min(92vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-cyan-300/35 bg-[linear-gradient(145deg,rgba(8,23,46,0.96),rgba(4,14,30,0.96))] p-6 shadow-[0_0_48px_rgba(0,180,255,0.24)] outline-none">
          <Dialog.Title className="text-[20px] font-bold text-cyan-100 tracking-wide">
            联系方式
          </Dialog.Title>
          <Dialog.Description className="mt-3 text-[16px] leading-relaxed text-cyan-50/90">
            阿塔：15611700085
          </Dialog.Description>

          <div className="mt-6 flex justify-end">
            <Dialog.Close asChild>
              <button
                type="button"
                className="inline-flex min-w-[92px] justify-center rounded-full border border-cyan-200/40 bg-cyan-300/15 px-5 py-2 text-[14px] font-semibold text-cyan-50 hover:bg-cyan-300/25 transition-colors"
              >
                知道了
              </button>
            </Dialog.Close>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
