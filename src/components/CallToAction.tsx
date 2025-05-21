import React from "react";

export interface CallToActionProps {
  title: string;
  link: {
    text: string;
    url: string;
  };
}

export default function CallToAction(props: CallToActionProps) {
  return (
    <section>
      <h2>Test</h2>
      <a href="www.google.com.br">Call to action</a>
    </section>
  );
}
