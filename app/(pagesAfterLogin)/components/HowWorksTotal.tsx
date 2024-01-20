"use client";
import React, { useState } from "react";
import { PageWrapper } from "../emotion/page-wrapper";

function HowWorksTotal() {
  return (
    <PageWrapper>
      <div>
        <div className="border-zinc-400 border w-auto lg:w-80 p-2 rounded shadow-md  text-zinc-400 text-sm">
          <p>
            A sua renda mensal (o quanto você pode gastar por mês) será
            subtraida pelas contas que você colocou.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default HowWorksTotal;
