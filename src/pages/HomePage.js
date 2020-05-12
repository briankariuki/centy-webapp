import React, { Component } from "react";
import { Link } from "react-router-dom";
import Homebanner from "../assets/Group-333.png";

class HomePage extends Component {
  render() {
    return (
      <div className="max-w-screen-xl h-full w-full lg:w-4/5 mx-auto">
        <div className="lg:flex items-center">
          <div className="order-last lg:w-1/2">
            <div className="mx-auto lg:mt-20 mt-4 ">
              <img className="mx-auto banner-image" src={Homebanner} alt="" />
            </div>
          </div>
          <div className="order-first flex flex-col justify-center lg:w-1/2">
            <div className="lg:w-9/10 lg:mt-12">
              <div className="px-6 mt-8 lg:mt-0 lg:px-0">
                <h2 className="mt-4 leading-none font-bold lg:text-5xl text-3xl font-gilroy text-centydark">
                  Welcome to Mwalimu Smart
                </h2>
                <h3 className="mt-4 lg:text-2xl text-xl text-centygreen font-medium">
                  Your online quizzes platform
                </h3>

                <p className="lg:mt-6 mt-4 text-base lg:text-xl text-centydark">
                  Mwalimu Smart is a product of Centy. Get learning straight
                  from home. Complete quizzes in various subjects. Earn Prizes
                  from participating in the brain game challenges.
                </p>
                <p className="lg:mt-8 mt-4 text-base lg:text-xl text-centydark">
                  Get Started Today
                </p>
                <Link to="/login">
                  <button className="mt-4 w-48 py-3 bg-centygreen text-white rounded font-medium focus:outline-none hover:shadow-lg">
                    Sign in
                  </button>
                </Link>
                <p className="mt-12 text-base lg:text-xl text-centydark">
                  Or Download the App
                </p>

                <div className="mt-4">
                  <button>
                    <svg width="135" height="40" viewBox="0 0 135 40">
                      <path
                        d="M130.2,40H4.73A4.74,4.74,0,0,1,0,35.27V4.73A4.73,4.73,0,0,1,4.73,0H130.2A4.8,4.8,0,0,1,135,4.731V35.27A4.8,4.8,0,0,1,130.2,40Z"
                        fill="#a6a6a6"
                      />
                      <path d="M134,35.27a3.83,3.83,0,0,1-3.83,3.83H4.73A3.83,3.83,0,0,1,.89,35.27V4.72A3.84,3.84,0,0,1,4.73.89H130.2A3.83,3.83,0,0,1,134,4.72Z" />
                      <path
                        d="M30.13,19.78a5.8,5.8,0,0,1,2.76-4.86,5.94,5.94,0,0,0-4.68-2.53c-2-.21-3.87,1.18-4.88,1.18s-2.57-1.16-4.23-1.12a6.23,6.23,0,0,0-5.24,3.2c-2.27,3.92-.58,9.69,1.6,12.86,1.09,1.55,2.36,3.29,4,3.23s2.23-1,4.19-1,2.51,1,4.21,1,2.84-1.56,3.89-3.13a12.83,12.83,0,0,0,1.78-3.62,5.6,5.6,0,0,1-3.4-5.21Zm-3.2-9.47a5.71,5.71,0,0,0,1.31-4.09,5.81,5.81,0,0,0-3.76,1.94,5.43,5.43,0,0,0-1.34,3.94A4.8,4.8,0,0,0,26.93,10.31ZM53.65,31.5H51.37l-1.24-3.91H45.81L44.62,31.5H42.41l4.28-13.3h2.65ZM49.76,26l-1.12-3.48Q48.45,21.95,48,20q-.2.85-.63,2.51L46.18,26Zm14.9.59a5.45,5.45,0,0,1-1.32,3.87,3.87,3.87,0,0,1-2.94,1.26,2.94,2.94,0,0,1-2.72-1.36v5.05H55.5V25.07q0-1.54-.08-3.16H57.3l.12,1.52a3.79,3.79,0,0,1,6.07-.38,5.29,5.29,0,0,1,1.17,3.54Zm-2.17.08a4,4,0,0,0-.63-2.31A2.18,2.18,0,0,0,60,23.41a2.22,2.22,0,0,0-1.43.52,2.43,2.43,0,0,0-.84,1.37,2.79,2.79,0,0,0-.1.65v1.6a2.56,2.56,0,0,0,.64,1.77,2.13,2.13,0,0,0,1.67.72,2.18,2.18,0,0,0,1.88-.93,4.08,4.08,0,0,0,.67-2.44Zm13.21-.08a5.45,5.45,0,0,1-1.32,3.87,3.86,3.86,0,0,1-2.94,1.26,2.94,2.94,0,0,1-2.72-1.36v5.05H66.54V25.07q0-1.54-.08-3.16h1.88l.12,1.52a3.79,3.79,0,0,1,6.07-.38,5.3,5.3,0,0,1,1.17,3.54Zm-2.17.08a4,4,0,0,0-.63-2.31,2.18,2.18,0,0,0-1.9-.95,2.22,2.22,0,0,0-1.43.52,2.42,2.42,0,0,0-.84,1.37,2.85,2.85,0,0,0-.1.65v1.6a2.57,2.57,0,0,0,.64,1.77A2.13,2.13,0,0,0,71,30a2.18,2.18,0,0,0,1.88-.93A4.08,4.08,0,0,0,73.53,26.67ZM88,27.77a3.55,3.55,0,0,1-1.18,2.76A5.24,5.24,0,0,1,83.2,31.7a6.35,6.35,0,0,1-3.45-.83l.49-1.78a5.84,5.84,0,0,0,3.08.85,2.91,2.91,0,0,0,1.88-.54,1.78,1.78,0,0,0,.67-1.45,1.85,1.85,0,0,0-.55-1.36,5.14,5.14,0,0,0-1.84-1Q80,24.25,80,21.74A3.38,3.38,0,0,1,81.25,19a4.83,4.83,0,0,1,3.26-1,6.46,6.46,0,0,1,3,.63L87,20.37a5.24,5.24,0,0,0-2.55-.61,2.58,2.58,0,0,0-1.76.55,1.58,1.58,0,0,0-.53,1.2,1.63,1.63,0,0,0,.61,1.3,6.91,6.91,0,0,0,1.94,1,6.57,6.57,0,0,1,2.53,1.62A3.38,3.38,0,0,1,88,27.77Zm7.09-4.26H92.74v4.66q0,1.78,1.24,1.78a3.79,3.79,0,0,0,.95-.1L95,31.46a4.83,4.83,0,0,1-1.66.24,2.56,2.56,0,0,1-2-.77,3.78,3.78,0,0,1-.71-2.59V23.51h-1.4v-1.6h1.4V20.15l2.09-.63v2.39h2.35Zm10.6,3.12a5.26,5.26,0,0,1-1.26,3.63,4.51,4.51,0,0,1-3.52,1.46,4.29,4.29,0,0,1-3.36-1.4,5.1,5.1,0,0,1-1.25-3.53,5.21,5.21,0,0,1,1.29-3.65,4.47,4.47,0,0,1,3.48-1.42,4.38,4.38,0,0,1,3.4,1.4,5,5,0,0,1,1.22,3.51Zm-2.21.07a4.32,4.32,0,0,0-.57-2.28A2.11,2.11,0,0,0,101,23.27a2.14,2.14,0,0,0-2,1.15,4.4,4.4,0,0,0-.57,2.32A4.31,4.31,0,0,0,99,29a2.18,2.18,0,0,0,3.85,0,4.33,4.33,0,0,0,.63-2.3Zm9.14-2.92a3.7,3.7,0,0,0-.67-.06,2,2,0,0,0-1.74.85,3.19,3.19,0,0,0-.53,1.9v5h-2.13V24.9q0-1.66-.08-3h1.86l.08,1.84h.06a3.28,3.28,0,0,1,1.07-1.52,2.58,2.58,0,0,1,1.54-.51,3.42,3.42,0,0,1,.53,0Zm9.54,2.47a5,5,0,0,1-.08,1h-6.4a2.78,2.78,0,0,0,.93,2.17,3.17,3.17,0,0,0,2.09.67,7.07,7.07,0,0,0,2.59-.45l.33,1.48a8,8,0,0,1-3.22.59,4.66,4.66,0,0,1-3.51-1.31,4.85,4.85,0,0,1-1.27-3.52,5.5,5.5,0,0,1,1.19-3.61,4.09,4.09,0,0,1,3.36-1.54,3.58,3.58,0,0,1,3.14,1.54,5.19,5.19,0,0,1,.85,2.98Zm-2-.55a2.9,2.9,0,0,0-.41-1.64,1.86,1.86,0,0,0-1.7-.89,2,2,0,0,0-1.7.87,3.18,3.18,0,0,0-.63,1.66h4.44ZM49,10a3.28,3.28,0,0,1-1,2.67,4.21,4.21,0,0,1-2.78.82,12.9,12.9,0,0,1-1.53-.08V7a11.31,11.31,0,0,1,1.81-.14,3.89,3.89,0,0,1,2.59.75A3,3,0,0,1,49,10Zm-1.1,0a2.39,2.39,0,0,0-.61-1.76,2.39,2.39,0,0,0-1.77-.61,4.44,4.44,0,0,0-.84.07v4.89a5.531,5.531,0,0,0,.71,0,2.48,2.48,0,0,0,1.9-.59,2.68,2.68,0,0,0,.65-2Zm7.01,1a2.59,2.59,0,0,1-.62,1.78,2.22,2.22,0,0,1-1.73.72,2.11,2.11,0,0,1-1.65-.69,2.51,2.51,0,0,1-.62-1.74,2.56,2.56,0,0,1,.63-1.79,2.2,2.2,0,0,1,1.71-.7,2.16,2.16,0,0,1,1.67.69A2.49,2.49,0,0,1,54.91,11Zm-1.09,0a2.13,2.13,0,0,0-.28-1,1,1,0,0,0-.94-.56,1.05,1.05,0,0,0-1,.56,2.16,2.16,0,0,0-.28,1.14,2.13,2.13,0,0,0,.28,1.12,1.06,1.06,0,0,0,1,.56,1,1,0,0,0,.94-.57,2.12,2.12,0,0,0,.28-1.18Zm8.94-2.28-1.47,4.71h-1l-.61-2a15.318,15.318,0,0,1-.38-1.52,11.149,11.149,0,0,1-.38,1.52l-.65,2h-1L55.93,8.72H57L57.54,11q.19.79.32,1.51.12-.59.39-1.5l.67-2.25h.85l.64,2.2q.23.81.38,1.55a14.828,14.828,0,0,1,.32-1.55l.57-2.2h1Zm5.44,4.71h-1v-2.7q0-1.25-.95-1.25a1,1,0,0,0-.76.34,1.22,1.22,0,0,0-.29.81v2.8h-1V8.72H65v.74a1.51,1.51,0,0,1,.54-.57,1.77,1.77,0,0,1,.95-.27,1.5,1.5,0,0,1,1.1.43,2.07,2.07,0,0,1,.54,1.56Zm2.89,0H70V6.56h1ZM77.26,11a2.59,2.59,0,0,1-.62,1.78,2.22,2.22,0,0,1-1.73.72,2.1,2.1,0,0,1-1.65-.69,2.51,2.51,0,0,1-.61-1.74,2.56,2.56,0,0,1,.64-1.79A2.2,2.2,0,0,1,75,8.62a2.16,2.16,0,0,1,1.67.69A2.49,2.49,0,0,1,77.26,11Zm-1.09,0a2.13,2.13,0,0,0-.28-1A1.077,1.077,0,0,0,74,10a2.16,2.16,0,0,0-.28,1.14A2.13,2.13,0,0,0,74,12.21a1.06,1.06,0,0,0,1,.56,1,1,0,0,0,.94-.57,2.11,2.11,0,0,0,.23-1.13Zm6.16,2.43h-.94l-.08-.54a1.61,1.61,0,0,1-1.38.65,1.42,1.42,0,0,1-1.08-.43,1.34,1.34,0,0,1-.37-1,1.46,1.46,0,0,1,.72-1.32,3.75,3.75,0,0,1,2-.45V10.3q0-.93-1-.93a2.19,2.19,0,0,0-1.2.35L78.8,9a3,3,0,0,1,1.62-.41q1.85,0,1.85,1.95v1.74a7.36,7.36,0,0,0,.06,1.15Zm-1.09-1.62v-.73q-1.73,0-1.73.95a.71.71,0,0,0,.2.55.73.73,0,0,0,.51.18,1.06,1.06,0,0,0,.64-.22.89.89,0,0,0,.38-.74Zm7.05,1.62h-.93v-.76a1.57,1.57,0,0,1-1.51.86,1.77,1.77,0,0,1-1.42-.67,2.61,2.61,0,0,1-.56-1.74,2.73,2.73,0,0,1,.61-1.85,1.88,1.88,0,0,1,1.46-.66,1.41,1.41,0,0,1,1.33.64V6.56h1v5.61Q88.25,12.85,88.29,13.43Zm-1.09-2v-.79a1.54,1.54,0,0,0,0-.33,1.19,1.19,0,0,0-.38-.64,1,1,0,0,0-.7-.26,1.08,1.08,0,0,0-.92.47,2,2,0,0,0-.34,1.19,1.86,1.86,0,0,0,.32,1.14,1.08,1.08,0,0,0,.92.47,1,1,0,0,0,.83-.39,1.29,1.29,0,0,0,.27-.85ZM97.25,11a2.59,2.59,0,0,1-.62,1.78,2.21,2.21,0,0,1-1.73.72,2.11,2.11,0,0,1-1.65-.69,2.51,2.51,0,0,1-.61-1.74,2.56,2.56,0,0,1,.64-1.79A2.2,2.2,0,0,1,95,8.62a2.15,2.15,0,0,1,1.67.69A2.49,2.49,0,0,1,97.25,11Zm-1.09,0a2.13,2.13,0,0,0-.28-1,1,1,0,0,0-.94-.56A1.05,1.05,0,0,0,94,10a2.16,2.16,0,0,0-.28,1.14A2.13,2.13,0,0,0,94,12.21a1.07,1.07,0,0,0,1.89,0,2.13,2.13,0,0,0,.27-1.14Zm6.72,2.43h-1v-2.7q0-1.25-1-1.25a.94.94,0,0,0-.76.34,1.21,1.21,0,0,0-.29.81v2.8h-1V8.72h.92v.74a1.53,1.53,0,0,1,.54-.57,1.77,1.77,0,0,1,1-.27,1.5,1.5,0,0,1,1.1.43,2.07,2.07,0,0,1,.54,1.56Zm7.06-3.93h-1.15v2.29c0,.58.21.87.61.87a1.85,1.85,0,0,0,.47,0v.8a2.35,2.35,0,0,1-.81.12,1.25,1.25,0,0,1-1-.38,1.85,1.85,0,0,1-.35-1.27V9.5h-.69V8.72h.69V7.86l1-.31V8.72h1.15V9.5Zm5.54,3.93h-1V10.75q0-1.27-.95-1.27a1,1,0,0,0-1,.73,1.32,1.32,0,0,0,0,.38v2.84h-1V6.56h1V9.4a1.58,1.58,0,0,1,1.42-.77A1.46,1.46,0,0,1,115,9a2.15,2.15,0,0,1,.53,1.58Zm5.73-2.58a2.53,2.53,0,0,1,0,.48H118a1.37,1.37,0,0,0,.46,1.07,1.56,1.56,0,0,0,1,.33,3.47,3.47,0,0,0,1.27-.22l.16.73a4,4,0,0,1-1.58.29,2.28,2.28,0,0,1-1.72-.64,2.38,2.38,0,0,1-.62-1.73,2.7,2.7,0,0,1,.58-1.77,2,2,0,0,1,1.65-.76,1.75,1.75,0,0,1,1.54.76,2.52,2.52,0,0,1,.47,1.46Zm-1-.27a1.41,1.41,0,0,0-.2-.81.92.92,0,0,0-.83-.44,1,1,0,0,0-.83.43,1.59,1.59,0,0,0-.31.81Z"
                        fill="#fff"
                      />
                    </svg>
                  </button>
                  <button className="ml-4">
                    <svg width="135.3" height="39.68">
                      <defs>
                        <linearGradient
                          id="a"
                          x1=".621"
                          y1=".95"
                          x2=".241"
                          y2=".281"
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset="0" stop-color="#210e4a" />
                          <stop offset=".007" stop-color="#00a1ff" />
                          <stop offset=".26" stop-color="#00beff" />
                          <stop offset=".512" stop-color="#00d2ff" />
                          <stop offset=".76" stop-color="#00dfff" />
                          <stop offset="1" stop-color="#00e3ff" />
                        </linearGradient>
                        <linearGradient
                          id="b"
                          x1="1.076"
                          y1=".5"
                          x2="-1.305"
                          y2=".5"
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset="0" stop-color="#ffe000" />
                          <stop offset=".409" stop-color="#ffbd00" />
                          <stop offset=".775" stop-color="orange" />
                          <stop offset="1" stop-color="#ff9c00" />
                        </linearGradient>
                        <linearGradient
                          id="c"
                          x1=".862"
                          y1=".134"
                          x2="-.501"
                          y2="-.821"
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset="0" stop-color="#ff3a44" />
                          <stop offset="1" stop-color="#c31162" />
                        </linearGradient>
                        <linearGradient
                          id="d"
                          x1="-.188"
                          y1="1.602"
                          x2=".421"
                          y2="1.175"
                          gradientUnits="objectBoundingBox"
                        >
                          <stop offset="0" stop-color="#32a071" />
                          <stop offset=".069" stop-color="#2da771" />
                          <stop offset=".476" stop-color="#15cf74" />
                          <stop offset=".801" stop-color="#06e775" />
                          <stop offset="1" stop-color="#00f076" />
                        </linearGradient>
                      </defs>
                      <g data-name="Group 159">
                        <g data-name="Group 158">
                          <path
                            data-name="Path 447"
                            d="M130.31 39.63H5a5 5 0 01-5-5V5a5 5 0 015-5h125.3a5 5 0 015 5v29.68a5 5 0 01-4.99 4.95z"
                          />
                          <path
                            data-name="Path 448"
                            d="M130.31.79A4.19 4.19 0 01134.52 5v29.68a4.19 4.19 0 01-4.21 4.16H5a4.19 4.19 0 01-4.2-4.16V5A4.19 4.19 0 015 .79h125.3m0-.79H5a5 5 0 00-5 5v29.68a5 5 0 005 5h125.3a5 5 0 005-5V5a5 5 0 00-4.99-5z"
                            fill="#a6a6a6"
                          />
                          <path
                            data-name="Path 449"
                            d="M47.53 10.15a2.69 2.69 0 01-.74 2 3 3 0 01-2.21.88 3.06 3.06 0 01-2.21-.89 3 3 0 01-.91-2.22 3.09 3.09 0 013.12-3.11 3.18 3.18 0 011.23.25 2.44 2.44 0 01.94.66l-.52.52a2.05 2.05 0 00-1.65-.7 2.31 2.31 0 00-1.64.66 2.27 2.27 0 00-.69 1.71 2.28 2.28 0 00.69 1.72 2.33 2.33 0 001.64.66 2.3 2.3 0 001.68-.66 1.85 1.85 0 00.5-1.2h-2.19V9.7h2.91a2 2 0 01.05.45zm4.62-2.48h-2.73v1.88h2.47v.72h-2.47v1.88h2.74v.73h-3.52V6.94h3.51zm3.26 5.21h-.77V7.67H53v-.73h4.13v.73h-1.72zm4.67 0V6.94h.77v5.94zm4.2 0h-.77V7.67h-1.68v-.73H66v.73h-1.72zm9.5-.77a3.15 3.15 0 01-4.41 0 3 3 0 01-.89-2.21 3 3 0 01.89-2.21 3.14 3.14 0 014.41 0 3 3 0 01.89 2.2 3 3 0 01-.89 2.22zm-3.84-.5a2.306 2.306 0 003.94-1.71 2.306 2.306 0 10-4.61 0 2.32 2.32 0 00.68 1.72zm5.82 1.27V6.94h.94l2.92 4.62h0V6.94h.77v5.94h-.81L76.53 8h0v4.85z"
                            fill="#fff"
                            stroke="#fff"
                            stroke-miterlimit="10"
                            stroke-width=".16"
                          />
                          <path
                            data-name="Path 450"
                            d="M68.3 21.55a4.18 4.18 0 103.031 1.2 4.21 4.21 0 00-3.031-1.2zm0 6.77a2.56 2.56 0 112.41-2.55 2.45 2.45 0 01-2.41 2.55zM59 21.55a4.18 4.18 0 103.031 1.2A4.21 4.21 0 0059 21.55zm0 6.77a2.56 2.56 0 112.4-2.55 2.45 2.45 0 01-2.4 2.55zm-11.14-5.48v1.79h4.33a3.7 3.7 0 01-1 2.25 4.47 4.47 0 01-3.34 1.31 4.76 4.76 0 010-9.51A4.62 4.62 0 0151.12 20l1.28-1.26a6.35 6.35 0 00-4.54-1.8 6.68 6.68 0 00-6.72 6.55A6.68 6.68 0 0047.86 30a6.09 6.09 0 004.62-1.84 6.38 6.38 0 001.47-5.3zm45.42 1.39a3.938 3.938 0 00-7.65 1.53 4.15 4.15 0 004.2 4.24 4.24 4.24 0 003.55-1.87l-1.45-1a2.44 2.44 0 01-2.1 1.17 2.17 2.17 0 01-2.06-1.3l5.7-2.33zm-5.81 1.4a2.32 2.32 0 012.23-2.46 1.66 1.66 0 011.59.89zm-4.63 4.09h1.86V17.34h-1.87zm-3.07-7.23h-.06a3 3 0 00-2.24-.94 4.22 4.22 0 000 8.43 2.93 2.93 0 002.24-1h.06v.6a2.17 2.17 0 01-2.28 2.48 2.36 2.36 0 01-2.15-1.5l-1.63.67a4.07 4.07 0 003.78 2.49c2.2 0 4.05-1.28 4.05-4.39v-7.52h-1.78zm-2.14 5.83a2.56 2.56 0 010-5.11 2.39 2.39 0 012.28 2.57 2.37 2.37 0 01-2.3 2.54zm24.44-11h-4.5v12.4h1.87V25H102a3.85 3.85 0 100-7.69zm0 6h-2.63v-4.26h2.66a2.125 2.125 0 010 4.25zm11.56-1.78a3.51 3.51 0 00-3.33 1.9l1.66.69a1.78 1.78 0 011.71-.91 1.8 1.8 0 012 1.59v.13a4.15 4.15 0 00-2-.48c-1.79 0-3.61 1-3.61 2.79a2.88 2.88 0 003.15 2.75 2.65 2.65 0 002.39-1.21h.06v1h1.81V25c-.01-2.24-1.67-3.47-3.82-3.47zm-.23 6.79c-.61 0-1.46-.3-1.46-1 0-1 1.06-1.33 2-1.33a3.39 3.39 0 011.71.42 2.26 2.26 0 01-2.22 1.89zM124 21.8l-2.15 5.37h-.06l-2.22-5.37h-2l3.34 7.5-1.91 4.18h2l5.14-11.68zm-16.85 7.92h1.87V17.34h-1.87z"
                            fill="#fff"
                          />
                          <path
                            data-name="Path 451"
                            d="M10.46 7.47A2 2 0 0010 8.86v21.91a2 2 0 00.46 1.39l.07.07L23 20v-.29L10.53 7.4z"
                            fill="rgba(0,0,0,0)"
                          />
                          <path
                            data-name="Path 452"
                            d="M27.09 24.05L23 20v-.29l4.14-4.09.09.05 4.9 2.76c1.4.78 1.4 2.07 0 2.86L27.19 24z"
                            fill="rgba(0,0,0,0)"
                          />
                          <path
                            data-name="Path 453"
                            d="M27.19 24L23 19.81 10.46 32.17a1.65 1.65 0 002.08.06L27.19 24"
                            fill="rgba(0,0,0,0)"
                          />
                          <path
                            data-name="Path 454"
                            d="M27.19 15.63L12.54 7.41a1.65 1.65 0 00-2.08.06L23 19.81z"
                            fill="rgba(0,0,0,0)"
                          />
                        </g>
                        <path
                          d="M.468-32.275A1.86 1.86 0 000-30.922v21.271A1.86 1.86 0 00.468-8.3l.073.065 12.5-11.915v-.281L.541-32.344z"
                          transform="translate(11 39.656)"
                          fill="url(#a)"
                        />
                        <path
                          data-name="Shape"
                          d="M21.438-13.6l-4.163-3.974v-.281l4.168-3.974.093.052 4.937 2.677c1.409.76 1.409 2.01 0 2.775l-4.936 2.673-.1.052z"
                          transform="translate(6.769 37.081)"
                          fill="url(#b)"
                        />
                        <path
                          data-name="Shape"
                          d="M17.457-28.7L13.2-32.763.62-20.773a1.705 1.705 0 002.1.057L17.457-28.7"
                          transform="translate(10.848 52.13)"
                          fill="url(#c)"
                        />
                        <path
                          data-name="Shape"
                          d="M17.457-8.074L2.718-16.058A1.711 1.711 0 00.62-16L13.2-4.012z"
                          transform="translate(10.848 23.379)"
                          fill="url(#d)"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
