import React, { Component } from "react";

export default class petal extends Component {
  render() {
    return (
      <div>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="18" cy="18" r="18" fill="#F5F5F5" />
          <g clip-path="url(#clip0)">
            <path
              d="M24.6545 12.1508C24.2856 12.0429 15.2626 11.1445 12.0937 15.4257C10.6903 17.3222 10.6692 19.9221 12.0234 23.1525C11.6799 23.8655 11.3792 24.6166 11.1341 25.4091C11.0596 25.6499 11.1943 25.9052 11.4349 25.9795C11.4797 25.9934 11.5251 26 11.57 26C11.7645 26 11.945 25.8744 12.0053 25.6787C14.4205 17.8703 22.2694 14.0927 24.6763 13.1383C24.9106 13.0454 25.2236 12.3174 24.6545 12.1508Z"
              fill="#84829A"
            />
            <path
              d="M13.4719 24.1295C14.7783 24.6776 16.0845 24.9585 17.2992 24.9585C18.391 24.9585 19.4092 24.734 20.2866 24.2788C22.0525 23.3628 23.1315 21.6106 23.4071 19.2111C23.6878 16.7657 24.0373 15.2339 24.3289 14.2969C21.7336 15.494 16.1688 18.5972 13.4719 24.1295Z"
              fill="#84829A"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="14"
                height="14"
                fill="white"
                transform="translate(11 12)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    );
  }
}
