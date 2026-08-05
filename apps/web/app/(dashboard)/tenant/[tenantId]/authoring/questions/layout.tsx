import React from "react";

export default function QuestionsLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="p-6">
      {children}
      {modal}
    </div>
  );
}