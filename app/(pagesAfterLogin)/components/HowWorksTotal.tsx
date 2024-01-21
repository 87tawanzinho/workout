"use client";
import React, { useState } from "react";
import { PageWrapper } from "../emotion/page-wrapper";

function HowWorksThis({ text }: { text: string }) {
  return (
    <PageWrapper>
      <div>
        <div className="border-zinc-400 border w-auto lg:w-80 p-2 rounded shadow-md  text-zinc-400 text-sm">
          <p>{text}</p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default HowWorksThis;
