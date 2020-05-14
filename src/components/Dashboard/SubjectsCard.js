import React, { Component } from "react";

class SubjectCard extends Component {
  render() {
    return (
      <div className="flex-1 rounded-lg shadow-textarea">
        <div className=" px-4 py-6">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-lg text-centydark">Subjects</h2>
            <button className="w-20 px-2 py-2 bg-green-200 text-centygreen text-sm rounded font-medium focus:outline-none hover:text-white hover:bg-centygreen">
              See All
            </button>
          </div>
          <div className="mt-6 min-w-80 lg:min-w-0 md:w-80">
            <ul className="space-y-4 list-style-none">
              <li className="">
                <button className=" w-full hover:shadow shadow-textarea rounded-md p-3 flex items-center bg-white justify-between focus:outline-none">
                  <div className="flex items-center">
                    <div className="flex items-center h-12 w-12 rounded-full bg-centygreen">
                      <svg
                        className="mx-auto h-6 w-6"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          data-name="Path 459"
                          d="M18.71 5.806A1.292 1.292 0 0020 4.516v-.645a1.292 1.292 0 00-1.29-1.29h-2.581v-.646a.646.646 0 00.645-.645V.645A.646.646 0 0016.129 0H.645A.646.646 0 000 .645v.645a.646.646 0 00.645.645v6.636L0 7.961V20h12.747l-8.88-8.387H12.9V17.1a.969.969 0 00.968.968h5.161A.969.969 0 0020 17.1V8.71a.969.969 0 00-.968-.968h-2.9V5.806zm-1.29-1.935h-7.1v-.645h7.1zm-7.743 1.01l-1.031-.687 1.031-.688zm.645-.365h7.1v.645h-7.1zm9.032-.645v.645a.646.646 0 01-.645.645h-.645V3.226h.645a.646.646 0 01.646.645zM.645.645h15.484v.645H.645zm0 18.71v-.645h.645v-.645H.645v-.645h.645v-.645H.645v-.645h.645v-.645H.645v-.645h.645v-.645H.645v-.645h.645v-.65H.645v-.645h.645v-.645H.645V9.458l10.479 9.9zM19.355 8.71v8.39a.323.323 0 01-.323.323h-5.161a.323.323 0 01-.323-.323V8.71a.323.323 0 01.323-.323h5.161a.323.323 0 01.323.323zm-3.871-.968H10v.645h2.963a.954.954 0 00-.059.323v.323H10v.645h2.9v1.29H3.183L1.29 9.18V1.935h14.194v.645H9.9L7.483 4.194 9.9 5.806h5.582zm0 0"
                          fill="#fff"
                        />
                        <path
                          data-name="Path 460"
                          d="M6.878 3.846H4.626l-.592 4.437-.929-1.162h-1.14v.655h.825L4.481 9.89l.718-5.389h1.679zm0 0"
                          fill="#fff"
                        />
                        <path
                          data-name="Path 461"
                          d="M8.834 5.559L7.428 6.965 6.022 5.559l-.463.463 1.406 1.406-1.406 1.406.463.463 1.406-1.406 1.406 1.406.463-.463-1.406-1.406 1.406-1.406zm0 0"
                          fill="#fff"
                        />
                        <path
                          data-name="Path 462"
                          d="M9.951 6.448h4.913v.655H9.951zm0 0"
                          fill="#fff"
                        />
                        <path
                          data-name="Path 463"
                          d="M1.965 12.335v5.7h6.034zm.655 1.52l3.731 3.524H2.62zm0 0"
                          fill="#fff"
                        />
                        <path
                          data-name="Path 464"
                          d="M18.69 9.012h-4.585v2.62h4.585zm-.655 1.965H14.76v-1.31h3.275zm0 0"
                          fill="#fff"
                        />
                        <path
                          data-name="Path 465"
                          d="M16.725 12.897h1.965v.655h-1.965zm0 0"
                          fill="#fff"
                        />
                        <path
                          data-name="Path 466"
                          d="M14.17 14.831h1.965v.655H14.17zm0 0"
                          fill="#fff"
                        />
                        <path
                          data-name="Path 467"
                          d="M14.17 16.07h1.965v.655H14.17zm0 0"
                          fill="#fff"
                        />
                        <path
                          data-name="Path 468"
                          d="M14.825 14.203h.655v-.655h.655v-.655h-.655v-.655h-.655v.655h-.655v.655h.655zm0 0"
                          fill="#fff"
                        />
                        <path
                          data-name="Path 469"
                          d="M18.131 14.911l-.423.424-.423-.424-.463.463.424.424-.424.423.463.463.423-.423.423.423.463-.463-.423-.423.423-.424zm0 0"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                    <div className="px-4">
                      <p className="text-centydark font-medium text-lg ">
                        Mathematics
                      </p>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-centylightdark"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </button>
              </li>
              <li className="">
                <button className=" w-full hover:shadow shadow-textarea rounded-md p-3 flex items-center bg-white justify-between focus:outline-none">
                  <div className="flex items-center">
                    <div className="flex items-center h-12 w-12 rounded-full bg-centypink">
                      <svg
                        className="mx-auto h-6 w-6"
                        width="14.922"
                        height="20"
                        viewBox="0 0 14.922 20"
                      >
                        <path
                          d="M13.163 9.479a.293.293 0 10-.371.453 4.2 4.2 0 11-1.013-.617.293.293 0 10.231-.538 4.828 4.828 0 00-3.53-.1V2.32h.04a.659.659 0 00.659-.658v-1A.659.659 0 008.519 0H.658A.658.658 0 000 .657v1a.659.659 0 00.658.658h.04v13.798A3.894 3.894 0 004.589 20a3.852 3.852 0 002.319-.771 3.954 3.954 0 001.276-1.635 4.8 4.8 0 004.979-8.114zM.658 1.734a.074.074 0 01-.072-.072v-1A.073.073 0 01.658.591h7.861a.074.074 0 01.073.071v1a.075.075 0 01-.073.072H5.372a.293.293 0 000 .586h2.522v3.225h-.916a7.559 7.559 0 01-2.934-.434 5.9 5.9 0 00-2.317-.378h-.442V2.32h2.8a.293.293 0 100-.586zm3.931 17.68a3.307 3.307 0 01-3.306-3.3v-.834h1.331a.293.293 0 000-.586H1.283v-1.88h1.331a.293.293 0 000-.586H1.283v-1.88h1.331a.293.293 0 100-.586H1.283V7.881h1.331a.293.293 0 100-.586H1.283v-1.98h.442a5.342 5.342 0 012.124.345 8.144 8.144 0 003.125.467h.919v2.8a4.8 4.8 0 00-.233 8.394 3.344 3.344 0 01-3.071 2.093z"
                          fill="#fff"
                        />
                        <path
                          d="M10.579 9.534c-.28-.625-.449-1-.91-1s-.631.378-.911 1a22.035 22.035 0 01-1.333 2.567 3.007 3.007 0 00-.23 3.169 2.853 2.853 0 002.456 1.392h.02a2.886 2.886 0 002.469-1.428 3.043 3.043 0 00-.229-3.132 22.1 22.1 0 01-1.332-2.568zm.794 5.269a1.991 1.991 0 01-1.707.978h-.014a1.96 1.96 0 01-1.691-.947 2.224 2.224 0 01.221-2.279 23.135 23.135 0 001.381-2.661l.106-.235.106.234a23.2 23.2 0 001.382 2.661 2.179 2.179 0 01.216 2.25z"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                    <div className="px-4">
                      <p className="text-centydark font-medium text-lg ">
                        Chemistry
                      </p>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-centylightdark"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </button>
              </li>
              <li className="">
                <button className=" w-full hover:shadow shadow-textarea rounded-md p-3 flex items-center bg-white justify-between focus:outline-none">
                  <div className="flex items-center">
                    <div className="flex items-center h-12 w-12 rounded-full bg-centyteal">
                      <svg
                        className="mx-auto h-6 w-6"
                        width="20.106"
                        height="20.106"
                        viewBox="0 0 20.106 20.106"
                      >
                        <g transform="translate(0)">
                          <g id="Group_180" data-name="Group 180">
                            <path
                              d="M115.983.141A.482.482,0,0,0,115.624,0a21.472,21.472,0,0,0-5.8,1.2,16.183,16.183,0,0,0-6.141,3.724c-.358.358-.706.737-1.039,1.131A3.542,3.542,0,0,0,99,5.847c-1.841.985-2.98,3.66-2.98,5.573a.483.483,0,0,0,.825.342A3.077,3.077,0,0,1,99.4,10.9l.169.169a17,17,0,0,0-.8,2.348,1.368,1.368,0,0,0,.059.84,4.577,4.577,0,0,0-1.305.92c-1.244,1.244-1.5,4.276-1.507,4.4a.483.483,0,0,0,.482.521h.038c.128-.01,3.161-.263,4.4-1.507a4.578,4.578,0,0,0,.92-1.3,1.365,1.365,0,0,0,.84.058,17,17,0,0,0,2.347-.8l.169.169a3.077,3.077,0,0,1-.859,2.559.483.483,0,0,0,.342.825c1.913,0,4.588-1.139,5.573-2.98a3.542,3.542,0,0,0-.21-3.642c.394-.333.773-.681,1.131-1.039a16.184,16.184,0,0,0,3.724-6.14,21.473,21.473,0,0,0,1.2-5.8A.483.483,0,0,0,115.983.141ZM97.1,10.38A5.585,5.585,0,0,1,99.454,6.7a2.575,2.575,0,0,1,2.574.121A19.544,19.544,0,0,0,100,10.131a.51.51,0,0,0-.256-.15A4.131,4.131,0,0,0,97.1,10.38Zm3.162,7.534a6.58,6.58,0,0,1-3.209,1.158,6.581,6.581,0,0,1,1.158-3.209,3.483,3.483,0,0,1,1.237-.813l1.627,1.627A3.483,3.483,0,0,1,100.261,17.914Zm2.2-1.5a.454.454,0,0,1-.422-.137l-.947-.947-1.248-1.248a.454.454,0,0,1-.137-.422,15.7,15.7,0,0,1,.6-1.846l4,4A15.686,15.686,0,0,1,102.465,16.415Zm6.96.256a5.585,5.585,0,0,1-3.681,2.356,4.114,4.114,0,0,0,.4-2.655.5.5,0,0,0-.147-.244A19.55,19.55,0,0,0,109.3,14.1,2.575,2.575,0,0,1,109.425,16.67Zm1.09-4.908a17.544,17.544,0,0,1-1.394,1.251,18.571,18.571,0,0,1-3.853,2.389l-4.544-4.544A18.568,18.568,0,0,1,103.112,7a17.541,17.541,0,0,1,1.251-1.394,15.072,15.072,0,0,1,5.494-3.392l4.05,4.05A15.071,15.071,0,0,1,110.515,11.762Zm3.74-6.514L110.876,1.87a21.731,21.731,0,0,1,4.241-.863A21.734,21.734,0,0,1,114.254,5.248Z"
                              transform="translate(-96.018 0)"
                              fill="#fff"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div className="px-4">
                      <p className="text-centydark font-medium text-lg ">
                        Physics
                      </p>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-centylightdark"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </button>
              </li>
              <li className="">
                <button className=" w-full hover:shadow shadow-textarea rounded-md p-3 flex items-center bg-white justify-between focus:outline-none">
                  <div className="flex items-center">
                    <div className="flex items-center h-12 w-12 rounded-full bg-centyorange">
                      <svg
                        className="mx-auto h-6 w-6"
                        width="20.091"
                        height="20.09"
                        viewBox="0 0 20.091 20.09"
                      >
                        <path
                          d="M18.477,5.668a3.019,3.019,0,0,1-.6.473L14.449,2.716a3.022,3.022,0,0,1,.473-.6A.945.945,0,0,0,13.586.777,5.427,5.427,0,0,0,12.3,5.836c-1.947-.4-4.1-.572-5.819,1.146a4.648,4.648,0,0,0-1.365,2.79.295.295,0,1,0,.584.075A4.079,4.079,0,0,1,6.9,7.4c1.583-1.583,3.584-1.355,5.516-.937.058.289.109.515.165.764C10.658,6.79,8.8,6.481,7.4,7.9,4.264,11.041,9.588,16.4,6.085,19.9a.355.355,0,0,1-.5-.5c2.221-2.221.237-5.412.081-8.468a.295.295,0,0,0-.589.03A12.341,12.341,0,0,0,5.334,12.8,5.428,5.428,0,0,0,.275,14.088a.945.945,0,0,0,1.336,1.336,3.021,3.021,0,0,1,.6-.473L5.64,18.376a3.024,3.024,0,0,1-.473.6A.944.944,0,0,0,6.5,20.315a5.427,5.427,0,0,0,1.287-5.059c2.223.458,4.209.463,5.819-1.146,1.719-1.719,1.548-3.872,1.146-5.819a8.939,8.939,0,0,0,1.686.125.295.295,0,0,0-.019-.589,8.745,8.745,0,0,1-1.8-.156c-.057-.249-.112-.483-.174-.753,1.635.329,3.191.426,4.449-.833a.355.355,0,0,1,.5.5,4.03,4.03,0,0,1-1.9,1.095.295.295,0,0,0,.145.571A4.6,4.6,0,0,0,19.813,7a.944.944,0,1,0-1.336-1.336ZM1.194,15.007a.355.355,0,1,1-.5-.5,4.287,4.287,0,0,1,3.186-1.242,9.173,9.173,0,0,1,1.591.158c.056.247.114.491.174.753-1.635-.329-3.191-.426-4.449.832Zm1.6-.311a6.1,6.1,0,0,1,2.991.11,6.094,6.094,0,0,1,.11,2.991Zm4.57-1.469a11.936,11.936,0,0,1-.415-2.694l3.109,3.109a11.933,11.933,0,0,1-2.694-.415Zm3.45.337L7.026,9.777a2.814,2.814,0,0,1,.592-1.241l4.437,4.437a2.81,2.81,0,0,1-1.241.592Zm1.658-1.008L8.034,8.119a2.812,2.812,0,0,1,1.241-.592l3.787,3.787a2.813,2.813,0,0,1-.592,1.241Zm.254-4.691a11.945,11.945,0,0,1,.415,2.694L10.031,7.45a11.934,11.934,0,0,1,2.694.415Zm.466,5.828c-1.583,1.583-3.584,1.355-5.516.937-.042-.207-.087-.421-.165-.764,1.944.442,3.765.739,5.178-.675C15.8,10.078,10.52,4.677,14,1.194a.355.355,0,1,1,.5.5c-3.131,3.131,2.188,8.5-1.314,12ZM14.3,6.286a6.094,6.094,0,0,1-.11-2.991l3.1,3.1a6.094,6.094,0,0,1-2.991-.11Zm0,0"
                          transform="translate(0.001 -0.501)"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                    <div className="px-4">
                      <p className="text-centydark font-medium text-lg ">
                        Biology
                      </p>
                    </div>
                  </div>
                  <div>
                    <svg
                      className="h-5 w-5 text-centylightdark"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SubjectCard;
