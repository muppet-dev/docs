"use client";
import { useId } from "react";

export default function Logo() {
  const id = useId();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 -74 1885 440"
      className="w-28 dark:fill-white"
    >
      <title>Muppet</title>
      <defs>
        <linearGradient
          id={id}
          x1="0.75"
          y1="2.938"
          x2="78.969"
          y2="81.156"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#00afde" />
          <stop offset="1" stopColor="#c7e758" />
        </linearGradient>
      </defs>
      <g transform="translate(-10 -150) scale(16)">
        <path d="M2.907 25.6v-11.627h-2.187v-4.373h4.48v2.613h1.173q0.853-1.387 2.213-2.147t3.36-0.76q1.92 0 3.293 0.68t2.2 2.013h0.107q1.84-2.693 5.467-2.693 3.093 0 4.907 1.8t1.813 4.867v9.627h-4.427v-8.773q0-3.573-3.387-3.573t-3.387 3.573v8.773h-4.427v-8.773q0-3.573-3.44-3.573-1.653 0-2.493 0.88t-0.84 2.693v8.773h-4.427z" />
        <path
          transform="translate(30 0)"
          d="M8.533 25.893q-3.333 0-5.12-1.76t-1.787-4.8v-9.733h4.427v8.88q0 1.733 0.893 2.6t2.68 0.867q1.84 0 2.84-0.933t1-2.667v-8.747h4.427v11.627h2.187v4.373h-4.48v-2.613h-1.12q-0.96 1.413-2.333 2.16t-3.613 0.747z"
        />
        <path
          transform="translate(50 0)"
          d="M2.907 32v-18.027h-2.187v-4.373h4.48v2.613h1.12q0.853-1.387 2.28-2.16t3.453-0.773q2.48 0 4.187 1.040t2.587 2.907 0.88 4.373-0.853 4.387-2.48 2.907-3.947 1.027q-1.76 0-3.013-0.653t-1.973-1.853h-0.107v8.587h-4.427zM11.227 22.080q2.027 0 3.040-1.2t1.013-3.28-1.013-3.28-3.040-1.2q-1.787 0-2.84 1t-1.053 2.76v1.44q0 1.76 1.053 2.76t2.84 1z"
        />
        <path
          transform="translate(70 0)"
          d="M2.907 32v-18.027h-2.187v-4.373h4.48v2.613h1.12q0.853-1.387 2.28-2.16t3.453-0.773q2.48 0 4.187 1.040t2.587 2.907 0.88 4.373-0.853 4.387-2.48 2.907-3.947 1.027q-1.76 0-3.013-0.653t-1.973-1.853h-0.107v8.587h-4.427zM11.227 22.080q2.027 0 3.040-1.2t1.013-3.28-1.013-3.28-3.040-1.2q-1.787 0-2.84 1t-1.053 2.76v1.44q0 1.76 1.053 2.76t2.84 1z"
        />
        <path
          transform="translate(90 0)"
          d="M9.387 25.92q-2.587 0-4.507-1.027t-2.96-2.907-1.040-4.44 1.013-4.413 2.893-2.853 4.44-1q2.507 0 4.307 0.96t2.76 2.747 0.96 4.267v1.493h-12.133q0.267 1.787 1.36 2.72t2.88 0.933q1.413 0 2.24-0.48t1.173-1.467h4.427q-0.533 2.56-2.587 4.013t-5.227 1.453zM5.227 15.813h7.787q-0.213-1.52-1.173-2.28t-2.587-0.76-2.653 0.773-1.373 2.267z"
        />
        <path
          transform="translate(107 0)"
          d="M6.827 25.6q-1.707 0-2.653-0.867t-0.947-2.653v-9.013h-2.747v-3.467h2.8v-4.8h4.32v4.8h3.707v3.467h-3.653v9.067h4.027v3.467h-4.853z"
        />
      </g>
      <rect fill={`url(#${id})`} width="78" height="78" />
    </svg>
  );
}
