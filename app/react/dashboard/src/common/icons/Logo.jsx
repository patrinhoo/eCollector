import React from 'react';

export const Logo = ({ width = 279, height = 247, ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox='0 0 279 247'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M52.5931 62.166C52.5931 58.0233 53.6888 53.9374 55.7618 50.35C57.8347 46.7625 60.8281 43.7717 64.4183 41.701L126.681 5.78928C130.27 3.71945 134.357 2.62543 138.5 2.62543C142.644 2.62545 146.731 3.71951 150.319 5.78937L212.582 41.7013C216.172 43.7721 219.165 46.7629 221.238 50.3503C223.311 53.9378 224.407 58.0236 224.407 62.1662V133.974C224.407 138.116 223.311 142.202 221.238 145.79C219.165 149.377 216.172 152.368 212.582 154.439L150.319 190.351C146.73 192.421 142.643 193.515 138.5 193.515C134.357 193.515 130.27 192.421 126.681 190.351L64.4182 154.439C60.828 152.368 57.8346 149.377 55.7617 145.79C53.6888 142.202 52.5932 138.116 52.5932 133.974L52.5931 62.166Z'
      fill='#010015'
      fillOpacity='0.77'
    />
    <path
      d='M221.78 62.1662C221.78 54.6852 217.752 47.7148 211.269 43.9752L149.006 8.06326C142.526 4.32559 134.475 4.32556 127.995 8.06315L65.7316 43.9749C59.248 47.7144 55.2203 54.6848 55.2203 62.1659L55.2204 133.974C55.2204 141.455 59.248 148.425 65.7315 152.165L127.994 188.077C134.474 191.814 142.526 191.814 149.006 188.077L211.269 152.165C217.752 148.425 221.78 141.455 221.78 133.974V62.1662ZM227.034 62.1662V133.974C227.034 143.355 222.025 152.023 213.895 156.712L151.632 192.624C143.506 197.312 133.494 197.312 125.368 192.624L63.105 156.712C54.9753 152.023 49.9661 143.354 49.9661 133.974C49.9661 133.973 49.9661 133.974 49.9661 133.974L49.9661 62.1659C49.9661 52.7848 54.9749 44.1164 63.1051 39.4271L125.368 3.51539C133.495 -1.17183 143.506 -1.1718 151.633 3.51552L213.895 39.4275C222.025 44.1168 227.034 52.7851 227.034 62.1662Z'
      fill='#C1C70E'
    />
    <path
      d='M2.52841 235V205.909H22.1307V210.98H8.67898V217.912H21.1222V222.983H8.67898V229.929H22.1875V235H2.52841ZM52.6882 216.094H46.4666C46.353 215.289 46.121 214.574 45.7706 213.949C45.4202 213.314 44.9704 212.775 44.4212 212.33C43.8719 211.884 43.2375 211.544 42.5178 211.307C41.8075 211.07 41.0357 210.952 40.2024 210.952C38.6967 210.952 37.3852 211.326 36.2678 212.074C35.1503 212.812 34.2839 213.892 33.6683 215.312C33.0528 216.723 32.745 218.437 32.745 220.455C32.745 222.528 33.0528 224.271 33.6683 225.682C34.2933 227.093 35.1645 228.158 36.282 228.878C37.3994 229.598 38.692 229.957 40.1598 229.957C40.9837 229.957 41.746 229.848 42.4467 229.631C43.157 229.413 43.7867 229.096 44.3359 228.679C44.8852 228.253 45.3397 227.737 45.6996 227.131C46.0689 226.525 46.3246 225.833 46.4666 225.057L52.6882 225.085C52.5272 226.42 52.1248 227.708 51.4808 228.949C50.8464 230.18 49.9893 231.283 48.9098 232.259C47.8397 233.224 46.5613 233.991 45.0746 234.56C43.5973 235.118 41.9259 235.398 40.0604 235.398C37.4657 235.398 35.1456 234.811 33.1001 233.636C31.0642 232.462 29.4543 230.762 28.2706 228.537C27.0964 226.312 26.5092 223.617 26.5092 220.455C26.5092 217.282 27.1058 214.583 28.299 212.358C29.4922 210.133 31.1115 208.437 33.157 207.273C35.2024 206.098 37.5036 205.511 40.0604 205.511C41.746 205.511 43.3085 205.748 44.7479 206.222C46.1967 206.695 47.4799 207.386 48.5973 208.295C49.7147 209.195 50.6238 210.298 51.3246 211.605C52.0348 212.912 52.4893 214.408 52.6882 216.094ZM83.8317 220.455C83.8317 223.627 83.2304 226.326 82.0277 228.551C80.8345 230.777 79.2057 232.476 77.1413 233.651C75.0864 234.815 72.7758 235.398 70.2095 235.398C67.6243 235.398 65.3042 234.811 63.2493 233.636C61.1944 232.462 59.5703 230.762 58.3771 228.537C57.1839 226.312 56.5874 223.617 56.5874 220.455C56.5874 217.282 57.1839 214.583 58.3771 212.358C59.5703 210.133 61.1944 208.437 63.2493 207.273C65.3042 206.098 67.6243 205.511 70.2095 205.511C72.7758 205.511 75.0864 206.098 77.1413 207.273C79.2057 208.437 80.8345 210.133 82.0277 212.358C83.2304 214.583 83.8317 217.282 83.8317 220.455ZM77.5959 220.455C77.5959 218.4 77.2881 216.667 76.6726 215.256C76.0665 213.845 75.2095 212.775 74.1016 212.045C72.9936 211.316 71.6963 210.952 70.2095 210.952C68.7228 210.952 67.4254 211.316 66.3175 212.045C65.2095 212.775 64.3478 213.845 63.7322 215.256C63.1262 216.667 62.8232 218.4 62.8232 220.455C62.8232 222.509 63.1262 224.242 63.7322 225.653C64.3478 227.064 65.2095 228.134 66.3175 228.864C67.4254 229.593 68.7228 229.957 70.2095 229.957C71.6963 229.957 72.9936 229.593 74.1016 228.864C75.2095 228.134 76.0665 227.064 76.6726 225.653C77.2881 224.242 77.5959 222.509 77.5959 220.455ZM88.3878 235V205.909H94.5384V229.929H107.01V235H88.3878ZM111.083 235V205.909H117.234V229.929H129.705V235H111.083ZM133.778 235V205.909H153.381V210.98H139.929V217.912H152.372V222.983H139.929V229.929H153.438V235H133.778ZM183.938 216.094H177.717C177.603 215.289 177.371 214.574 177.021 213.949C176.67 213.314 176.22 212.775 175.671 212.33C175.122 211.884 174.487 211.544 173.768 211.307C173.058 211.07 172.286 210.952 171.452 210.952C169.947 210.952 168.635 211.326 167.518 212.074C166.4 212.812 165.534 213.892 164.918 215.312C164.303 216.723 163.995 218.437 163.995 220.455C163.995 222.528 164.303 224.271 164.918 225.682C165.543 227.093 166.415 228.158 167.532 228.878C168.649 229.598 169.942 229.957 171.41 229.957C172.234 229.957 172.996 229.848 173.697 229.631C174.407 229.413 175.037 229.096 175.586 228.679C176.135 228.253 176.59 227.737 176.95 227.131C177.319 226.525 177.575 225.833 177.717 225.057L183.938 225.085C183.777 226.42 183.375 227.708 182.731 228.949C182.096 230.18 181.239 231.283 180.16 232.259C179.09 233.224 177.811 233.991 176.325 234.56C174.847 235.118 173.176 235.398 171.31 235.398C168.716 235.398 166.396 234.811 164.35 233.636C162.314 232.462 160.704 230.762 159.521 228.537C158.346 226.312 157.759 223.617 157.759 220.455C157.759 217.282 158.356 214.583 159.549 212.358C160.742 210.133 162.362 208.437 164.407 207.273C166.452 206.098 168.754 205.511 171.31 205.511C172.996 205.511 174.558 205.748 175.998 206.222C177.447 206.695 178.73 207.386 179.847 208.295C180.965 209.195 181.874 210.298 182.575 211.605C183.285 212.912 183.739 214.408 183.938 216.094ZM187.241 210.98V205.909H211.133V210.98H202.227V235H196.147V210.98H187.241ZM240.472 220.455C240.472 223.627 239.871 226.326 238.668 228.551C237.475 230.777 235.846 232.476 233.782 233.651C231.727 234.815 229.416 235.398 226.85 235.398C224.265 235.398 221.945 234.811 219.89 233.636C217.835 232.462 216.211 230.762 215.018 228.537C213.825 226.312 213.228 223.617 213.228 220.455C213.228 217.282 213.825 214.583 215.018 212.358C216.211 210.133 217.835 208.437 219.89 207.273C221.945 206.098 224.265 205.511 226.85 205.511C229.416 205.511 231.727 206.098 233.782 207.273C235.846 208.437 237.475 210.133 238.668 212.358C239.871 214.583 240.472 217.282 240.472 220.455ZM234.237 220.455C234.237 218.4 233.929 216.667 233.313 215.256C232.707 213.845 231.85 212.775 230.742 212.045C229.634 211.316 228.337 210.952 226.85 210.952C225.363 210.952 224.066 211.316 222.958 212.045C221.85 212.775 220.988 213.845 220.373 215.256C219.767 216.667 219.464 218.4 219.464 220.455C219.464 222.509 219.767 224.242 220.373 225.653C220.988 227.064 221.85 228.134 222.958 228.864C224.066 229.593 225.363 229.957 226.85 229.957C228.337 229.957 229.634 229.593 230.742 228.864C231.85 228.134 232.707 227.064 233.313 225.653C233.929 224.242 234.237 222.509 234.237 220.455ZM245.028 235V205.909H256.506C258.703 205.909 260.578 206.302 262.131 207.088C263.693 207.865 264.882 208.968 265.696 210.398C266.52 211.818 266.932 213.49 266.932 215.412C266.932 217.344 266.515 219.006 265.682 220.398C264.848 221.78 263.641 222.841 262.06 223.58C260.488 224.318 258.584 224.688 256.349 224.688H248.665V219.744H255.355C256.529 219.744 257.505 219.583 258.281 219.261C259.058 218.939 259.635 218.456 260.014 217.812C260.402 217.169 260.597 216.368 260.597 215.412C260.597 214.446 260.402 213.632 260.014 212.969C259.635 212.306 259.053 211.804 258.267 211.463C257.491 211.113 256.51 210.938 255.327 210.938H251.179V235H245.028ZM260.739 221.761L267.969 235H261.179L254.105 221.761H260.739Z'
      fill='#C1C70E'
    />
    <path
      d='M2.52841 235H1.02841V236.5H2.52841V235ZM2.52841 205.909V204.409H1.02841V205.909H2.52841ZM22.1307 205.909H23.6307V204.409H22.1307V205.909ZM22.1307 210.98V212.48H23.6307V210.98H22.1307ZM8.67898 210.98V209.48H7.17898V210.98H8.67898ZM8.67898 217.912H7.17898V219.412H8.67898V217.912ZM21.1222 217.912H22.6222V216.412H21.1222V217.912ZM21.1222 222.983V224.483H22.6222V222.983H21.1222ZM8.67898 222.983V221.483H7.17898V222.983H8.67898ZM8.67898 229.929H7.17898V231.429H8.67898V229.929ZM22.1875 229.929H23.6875V228.429H22.1875V229.929ZM22.1875 235V236.5H23.6875V235H22.1875ZM4.02841 235V205.909H1.02841V235H4.02841ZM2.52841 207.409H22.1307V204.409H2.52841V207.409ZM20.6307 205.909V210.98H23.6307V205.909H20.6307ZM22.1307 209.48H8.67898V212.48H22.1307V209.48ZM7.17898 210.98V217.912H10.179V210.98H7.17898ZM8.67898 219.412H21.1222V216.412H8.67898V219.412ZM19.6222 217.912V222.983H22.6222V217.912H19.6222ZM21.1222 221.483H8.67898V224.483H21.1222V221.483ZM7.17898 222.983V229.929H10.179V222.983H7.17898ZM8.67898 231.429H22.1875V228.429H8.67898V231.429ZM20.6875 229.929V235H23.6875V229.929H20.6875ZM22.1875 233.5H2.52841V236.5H22.1875V233.5ZM52.6882 216.094V217.594H54.3756L54.1779 215.918L52.6882 216.094ZM46.4666 216.094L44.9813 216.303L45.1635 217.594H46.4666V216.094ZM45.7706 213.949L44.4575 214.674L44.4622 214.682L45.7706 213.949ZM44.4212 212.33L43.4768 213.495L43.4768 213.495L44.4212 212.33ZM42.5178 211.307L42.0434 212.73L42.049 212.732L42.5178 211.307ZM36.2678 212.074L37.0949 213.325L37.1022 213.32L36.2678 212.074ZM33.6683 215.312L35.0432 215.912L35.0447 215.909L33.6683 215.312ZM33.6683 225.682L32.2934 226.282L32.2968 226.289L33.6683 225.682ZM36.282 228.878L35.4697 230.139H35.4697L36.282 228.878ZM42.4467 229.631L42.0069 228.197L42.0015 228.198L42.4467 229.631ZM44.3359 228.679L45.2425 229.874L45.249 229.869L45.2554 229.864L44.3359 228.679ZM45.6996 227.131L44.4187 226.35L44.4142 226.357L44.4098 226.365L45.6996 227.131ZM46.4666 225.057L46.4735 223.557L45.2172 223.551L44.9911 224.787L46.4666 225.057ZM52.6882 225.085L54.1774 225.265L54.379 223.593L52.6951 223.585L52.6882 225.085ZM51.4808 228.949L50.1495 228.258L50.1475 228.262L51.4808 228.949ZM48.9098 232.259L49.9149 233.372L49.9154 233.372L48.9098 232.259ZM45.0746 234.56L45.6052 235.963L45.6101 235.961L45.0746 234.56ZM33.1001 233.636L32.3507 234.936L32.3533 234.937L33.1001 233.636ZM28.2706 228.537L26.9439 229.237L26.9463 229.241L28.2706 228.537ZM28.299 212.358L29.621 213.067L28.299 212.358ZM33.157 207.273L33.8992 208.576L33.9038 208.574L33.157 207.273ZM44.7479 206.222L44.2792 207.646L44.2819 207.647L44.7479 206.222ZM48.5973 208.295L47.6507 209.459L47.6566 209.464L48.5973 208.295ZM51.3246 211.605L50.0026 212.314L50.0066 212.321L51.3246 211.605ZM52.6882 214.594H46.4666V217.594H52.6882V214.594ZM47.9519 215.884C47.8157 214.92 47.5317 214.023 47.079 213.215L44.4622 214.682C44.7103 215.125 44.8902 215.658 44.9813 216.303L47.9519 215.884ZM47.0837 213.224C46.6423 212.424 46.0687 211.734 45.3655 211.164L43.4768 213.495C43.8721 213.815 44.1981 214.204 44.4575 214.674L47.0837 213.224ZM45.3655 211.164C44.6649 210.596 43.8667 210.171 42.9865 209.882L42.049 212.732C42.6082 212.916 43.0789 213.173 43.4768 213.495L45.3655 211.164ZM42.9921 209.884C42.1127 209.591 41.1789 209.452 40.2024 209.452V212.452C40.8926 212.452 41.5024 212.55 42.0434 212.73L42.9921 209.884ZM40.2024 209.452C38.4365 209.452 36.8266 209.895 35.4333 210.827L37.1022 213.32C37.9438 212.757 38.957 212.452 40.2024 212.452V209.452ZM35.4406 210.823C34.0445 211.745 33.0047 213.071 32.292 214.716L35.0447 215.909C35.563 214.713 36.2562 213.88 37.0949 213.325L35.4406 210.823ZM32.2935 214.713C31.574 216.362 31.245 218.292 31.245 220.455H34.245C34.245 218.583 34.5315 217.085 35.0432 215.912L32.2935 214.713ZM31.245 220.455C31.245 222.667 31.5721 224.628 32.2935 226.282L35.0432 225.082C34.5335 223.914 34.245 222.39 34.245 220.455H31.245ZM32.2968 226.289C33.0209 227.924 34.0684 229.236 35.4697 230.139L37.0942 227.617C36.2607 227.08 35.5657 226.262 35.0398 225.074L32.2968 226.289ZM35.4697 230.139C36.8543 231.031 38.4351 231.457 40.1598 231.457V228.457C38.9489 228.457 37.9445 228.164 37.0942 227.617L35.4697 230.139ZM40.1598 231.457C41.1164 231.457 42.0306 231.331 42.8919 231.063L42.0015 228.198C41.4614 228.366 40.851 228.457 40.1598 228.457V231.457ZM42.8865 231.065C43.7521 230.799 44.5424 230.405 45.2425 229.874L43.4294 227.484C43.031 227.786 42.5619 228.026 42.0069 228.197L42.8865 231.065ZM45.2554 229.864C45.9554 229.321 46.5348 228.662 46.9894 227.896L44.4098 226.365C44.1446 226.811 43.815 227.185 43.4164 227.494L45.2554 229.864ZM46.9805 227.911C47.4555 227.132 47.7707 226.264 47.9421 225.327L44.9911 224.787C44.8784 225.403 44.6823 225.918 44.4187 226.35L46.9805 227.911ZM46.4598 226.557L52.6814 226.585L52.6951 223.585L46.4735 223.557L46.4598 226.557ZM51.199 224.906C51.0604 226.055 50.7139 227.171 50.1495 228.258L52.8121 229.64C53.5357 228.246 53.9941 226.786 54.1774 225.265L51.199 224.906ZM50.1475 228.262C49.5999 229.324 48.8566 230.285 47.9042 231.146L49.9154 233.372C51.1221 232.281 52.0928 231.036 52.8142 229.636L50.1475 228.262ZM47.9047 231.145C46.9857 231.975 45.8709 232.65 44.5391 233.158L45.6101 235.961C47.2517 235.333 48.6938 234.474 49.9149 233.372L47.9047 231.145ZM44.5439 233.157C43.2639 233.641 41.7768 233.898 40.0604 233.898V236.898C42.075 236.898 43.9307 236.596 45.6052 235.963L44.5439 233.157ZM40.0604 233.898C37.7008 233.898 35.6429 233.366 33.8469 232.335L32.3533 234.937C34.6483 236.255 37.2306 236.898 40.0604 236.898V233.898ZM33.8496 232.337C32.0749 231.313 30.6565 229.828 29.5949 227.833L26.9463 229.241C28.2521 231.696 30.0534 233.611 32.3507 234.936L33.8496 232.337ZM29.5972 227.837C28.5624 225.876 28.0092 223.435 28.0092 220.455H25.0092C25.0092 223.8 25.6303 226.747 26.944 229.237L29.5972 227.837ZM28.0092 220.455C28.0092 217.467 28.5709 215.025 29.621 213.067L26.977 211.649C25.6408 214.141 25.0092 217.097 25.0092 220.455H28.0092ZM29.621 213.067C30.6909 211.071 32.1171 209.591 33.8992 208.576L32.4147 205.969C30.1059 207.284 28.2935 209.194 26.977 211.649L29.621 213.067ZM33.9038 208.574C35.703 207.541 37.7429 207.011 40.0604 207.011V204.011C37.2642 204.011 34.7018 204.656 32.4102 205.972L33.9038 208.574ZM40.0604 207.011C41.6045 207.011 43.007 207.228 44.2792 207.646L45.2166 204.797C43.61 204.268 41.8875 204.011 40.0604 204.011V207.011ZM44.2819 207.647C45.5661 208.067 46.6842 208.673 47.6507 209.459L49.5439 207.132C48.2756 206.1 46.8274 205.323 45.2138 204.796L44.2819 207.647ZM47.6566 209.464C48.6122 210.233 49.3936 211.178 50.0026 212.314L52.6465 210.896C51.854 209.418 50.8173 208.157 49.538 207.127L47.6566 209.464ZM50.0066 212.321C50.6138 213.439 51.0189 214.747 51.1985 216.269L54.1779 215.918C53.9598 214.069 53.4558 212.385 52.6425 210.889L50.0066 212.321ZM82.0277 228.551L80.7081 227.838L80.7057 227.842L82.0277 228.551ZM77.1413 233.651L77.881 234.956L77.883 234.954L77.1413 233.651ZM63.2493 233.636L63.9935 232.334L63.2493 233.636ZM58.3771 228.537L57.0552 229.246L58.3771 228.537ZM58.3771 212.358L59.6991 213.067L58.3771 212.358ZM63.2493 207.273L63.989 208.578L63.9935 208.575L63.2493 207.273ZM77.1413 207.273L76.3971 208.575L76.4042 208.579L77.1413 207.273ZM82.0277 212.358L80.7057 213.067L80.7081 213.071L82.0277 212.358ZM76.6726 215.256L75.2943 215.848L75.2977 215.855L76.6726 215.256ZM74.1016 212.045L73.2769 213.298L74.1016 212.045ZM66.3175 212.045L67.1421 213.298L66.3175 212.045ZM63.7322 215.256L62.3574 214.656L62.354 214.664L63.7322 215.256ZM63.7322 225.653L62.354 226.245L62.3574 226.253L63.7322 225.653ZM66.3175 228.864L67.1421 227.611L66.3175 228.864ZM74.1016 228.864L73.2769 227.611L74.1016 228.864ZM76.6726 225.653L75.2977 225.054L75.2943 225.061L76.6726 225.653ZM82.3317 220.455C82.3317 223.44 81.766 225.88 80.7081 227.838L83.3473 229.264C84.6947 226.771 85.3317 223.814 85.3317 220.455H82.3317ZM80.7057 227.842C79.6373 229.835 78.2027 231.321 76.3997 232.347L77.883 234.954C80.2087 233.631 82.0318 231.718 83.3497 229.26L80.7057 227.842ZM76.4017 232.346C74.5916 233.372 72.5396 233.898 70.2095 233.898V236.898C73.012 236.898 75.5813 236.259 77.881 234.956L76.4017 232.346ZM70.2095 233.898C67.8605 233.898 65.8012 233.367 63.9935 232.334L62.5051 234.939C64.8072 236.254 67.388 236.898 70.2095 236.898V233.898ZM63.9935 232.334C62.1996 231.309 60.7685 229.823 59.6991 227.828L57.0552 229.246C58.3721 231.702 60.1892 233.615 62.5051 234.939L63.9935 232.334ZM59.6991 227.828C58.6487 225.869 58.0874 223.431 58.0874 220.455H55.0874C55.0874 223.803 55.7192 226.754 57.0552 229.246L59.6991 227.828ZM58.0874 220.455C58.0874 217.467 58.649 215.025 59.6991 213.067L57.0552 211.649C55.7189 214.141 55.0874 217.097 55.0874 220.455H58.0874ZM59.6991 213.067C60.768 211.073 62.1977 209.593 63.989 208.578L62.5096 205.968C60.191 207.282 58.3726 209.192 57.0552 211.649L59.6991 213.067ZM63.9935 208.575C65.8012 207.542 67.8605 207.011 70.2095 207.011V204.011C67.388 204.011 64.8072 204.655 62.5051 205.97L63.9935 208.575ZM70.2095 207.011C72.5374 207.011 74.5878 207.541 76.3971 208.575L77.8855 205.97C75.5851 204.656 73.0142 204.011 70.2095 204.011V207.011ZM76.4042 208.579C78.2046 209.595 79.6377 211.075 80.7057 213.067L83.3497 211.649C82.0313 209.19 80.2069 207.28 77.8784 205.966L76.4042 208.579ZM80.7081 213.071C81.766 215.029 82.3317 217.469 82.3317 220.455H85.3317C85.3317 217.095 84.6947 214.138 83.3473 211.645L80.7081 213.071ZM79.0959 220.455C79.0959 218.259 78.7682 216.308 78.0475 214.656L75.2977 215.855C75.808 217.025 76.0959 218.541 76.0959 220.455H79.0959ZM78.0508 214.664C77.3476 213.027 76.3163 211.707 74.9262 210.792L73.2769 213.298C74.1028 213.842 74.7854 214.663 75.2943 215.848L78.0508 214.664ZM74.9262 210.792C73.5445 209.883 71.9527 209.452 70.2095 209.452V212.452C71.4398 212.452 72.4428 212.749 73.2769 213.298L74.9262 210.792ZM70.2095 209.452C68.4663 209.452 66.8746 209.883 65.4929 210.792L67.1421 213.298C67.9763 212.749 68.9792 212.452 70.2095 212.452V209.452ZM65.4929 210.792C64.105 211.706 63.07 213.022 62.3574 214.656L65.1071 215.855C65.6255 214.667 66.314 213.843 67.1421 213.298L65.4929 210.792ZM62.354 214.664C61.6454 216.313 61.3232 218.261 61.3232 220.455H64.3232C64.3232 218.538 64.607 217.02 65.1105 215.848L62.354 214.664ZM61.3232 220.455C61.3232 222.648 61.6454 224.596 62.354 226.245L65.1105 225.061C64.607 223.889 64.3232 222.371 64.3232 220.455H61.3232ZM62.3574 226.253C63.07 227.887 64.105 229.203 65.4929 230.117L67.1421 227.611C66.314 227.066 65.6255 226.242 65.1071 225.054L62.3574 226.253ZM65.4929 230.117C66.8746 231.026 68.4663 231.457 70.2095 231.457V228.457C68.9792 228.457 67.9763 228.16 67.1421 227.611L65.4929 230.117ZM70.2095 231.457C71.9527 231.457 73.5445 231.026 74.9262 230.117L73.2769 227.611C72.4428 228.16 71.4398 228.457 70.2095 228.457V231.457ZM74.9262 230.117C76.3163 229.202 77.3476 227.883 78.0508 226.245L75.2943 225.061C74.7854 226.246 74.1028 227.067 73.2769 227.611L74.9262 230.117ZM78.0475 226.253C78.7682 224.601 79.0959 222.65 79.0959 220.455H76.0959C76.0959 222.369 75.808 223.884 75.2977 225.054L78.0475 226.253ZM88.3878 235H86.8878V236.5H88.3878V235ZM88.3878 205.909V204.409H86.8878V205.909H88.3878ZM94.5384 205.909H96.0384V204.409H94.5384V205.909ZM94.5384 229.929H93.0384V231.429H94.5384V229.929ZM107.01 229.929H108.51V228.429H107.01V229.929ZM107.01 235V236.5H108.51V235H107.01ZM89.8878 235V205.909H86.8878V235H89.8878ZM88.3878 207.409H94.5384V204.409H88.3878V207.409ZM93.0384 205.909V229.929H96.0384V205.909H93.0384ZM94.5384 231.429H107.01V228.429H94.5384V231.429ZM105.51 229.929V235H108.51V229.929H105.51ZM107.01 233.5H88.3878V236.5H107.01V233.5ZM111.083 235H109.583V236.5H111.083V235ZM111.083 205.909V204.409H109.583V205.909H111.083ZM117.234 205.909H118.734V204.409H117.234V205.909ZM117.234 229.929H115.734V231.429H117.234V229.929ZM129.705 229.929H131.205V228.429H129.705V229.929ZM129.705 235V236.5H131.205V235H129.705ZM112.583 235V205.909H109.583V235H112.583ZM111.083 207.409H117.234V204.409H111.083V207.409ZM115.734 205.909V229.929H118.734V205.909H115.734ZM117.234 231.429H129.705V228.429H117.234V231.429ZM128.205 229.929V235H131.205V229.929H128.205ZM129.705 233.5H111.083V236.5H129.705V233.5ZM133.778 235H132.278V236.5H133.778V235ZM133.778 205.909V204.409H132.278V205.909H133.778ZM153.381 205.909H154.881V204.409H153.381V205.909ZM153.381 210.98V212.48H154.881V210.98H153.381ZM139.929 210.98V209.48H138.429V210.98H139.929ZM139.929 217.912H138.429V219.412H139.929V217.912ZM152.372 217.912H153.872V216.412H152.372V217.912ZM152.372 222.983V224.483H153.872V222.983H152.372ZM139.929 222.983V221.483H138.429V222.983H139.929ZM139.929 229.929H138.429V231.429H139.929V229.929ZM153.438 229.929H154.938V228.429H153.438V229.929ZM153.438 235V236.5H154.938V235H153.438ZM135.278 235V205.909H132.278V235H135.278ZM133.778 207.409H153.381V204.409H133.778V207.409ZM151.881 205.909V210.98H154.881V205.909H151.881ZM153.381 209.48H139.929V212.48H153.381V209.48ZM138.429 210.98V217.912H141.429V210.98H138.429ZM139.929 219.412H152.372V216.412H139.929V219.412ZM150.872 217.912V222.983H153.872V217.912H150.872ZM152.372 221.483H139.929V224.483H152.372V221.483ZM138.429 222.983V229.929H141.429V222.983H138.429ZM139.929 231.429H153.438V228.429H139.929V231.429ZM151.938 229.929V235H154.938V229.929H151.938ZM153.438 233.5H133.778V236.5H153.438V233.5ZM183.938 216.094V217.594H185.626L185.428 215.918L183.938 216.094ZM177.717 216.094L176.231 216.303L176.414 217.594H177.717V216.094ZM177.021 213.949L175.707 214.674L175.712 214.682L177.021 213.949ZM175.671 212.33L174.727 213.495V213.495L175.671 212.33ZM173.768 211.307L173.293 212.73L173.299 212.732L173.768 211.307ZM167.518 212.074L168.345 213.325L168.352 213.32L167.518 212.074ZM164.918 215.312L166.293 215.912L166.295 215.909L164.918 215.312ZM164.918 225.682L163.543 226.282L163.547 226.289L164.918 225.682ZM167.532 228.878L166.72 230.139L167.532 228.878ZM173.697 229.631L173.257 228.197L173.252 228.198L173.697 229.631ZM175.586 228.679L176.493 229.874L176.499 229.869L176.505 229.864L175.586 228.679ZM176.95 227.131L175.669 226.35L175.664 226.357L175.66 226.365L176.95 227.131ZM177.717 225.057L177.723 223.557L176.467 223.551L176.241 224.787L177.717 225.057ZM183.938 225.085L185.427 225.265L185.629 223.593L183.945 223.585L183.938 225.085ZM182.731 228.949L181.399 228.258L181.397 228.262L182.731 228.949ZM180.16 232.259L181.165 233.372L181.165 233.372L180.16 232.259ZM176.325 234.56L176.855 235.963L176.86 235.961L176.325 234.56ZM164.35 233.636L163.601 234.936L163.603 234.937L164.35 233.636ZM159.521 228.537L158.194 229.237L158.196 229.241L159.521 228.537ZM159.549 212.358L160.871 213.067L159.549 212.358ZM164.407 207.273L165.149 208.576L165.154 208.574L164.407 207.273ZM175.998 206.222L175.529 207.646L175.532 207.647L175.998 206.222ZM179.847 208.295L178.901 209.459L178.907 209.464L179.847 208.295ZM182.575 211.605L181.253 212.314L181.257 212.321L182.575 211.605ZM183.938 214.594H177.717V217.594H183.938V214.594ZM179.202 215.884C179.066 214.92 178.782 214.023 178.329 213.215L175.712 214.682C175.96 215.125 176.14 215.658 176.231 216.303L179.202 215.884ZM178.334 213.224C177.892 212.424 177.319 211.734 176.616 211.164L174.727 213.495C175.122 213.815 175.448 214.204 175.708 214.674L178.334 213.224ZM176.616 211.164C175.915 210.596 175.117 210.171 174.236 209.882L173.299 212.732C173.858 212.916 174.329 213.173 174.727 213.495L176.616 211.164ZM174.242 209.884C173.363 209.591 172.429 209.452 171.452 209.452V212.452C172.143 212.452 172.752 212.55 173.293 212.73L174.242 209.884ZM171.452 209.452C169.686 209.452 168.077 209.895 166.683 210.827L168.352 213.32C169.194 212.757 170.207 212.452 171.452 212.452V209.452ZM166.691 210.823C165.294 211.745 164.255 213.071 163.542 214.716L166.295 215.909C166.813 214.713 167.506 213.88 168.345 213.325L166.691 210.823ZM163.543 214.713C162.824 216.362 162.495 218.292 162.495 220.455H165.495C165.495 218.583 165.782 217.085 166.293 215.912L163.543 214.713ZM162.495 220.455C162.495 222.667 162.822 224.628 163.543 226.282L166.293 225.082C165.784 223.914 165.495 222.39 165.495 220.455H162.495ZM163.547 226.289C164.271 227.924 165.318 229.236 166.72 230.139L168.344 227.617C167.511 227.08 166.816 226.262 166.29 225.074L163.547 226.289ZM166.72 230.139C168.104 231.031 169.685 231.457 171.41 231.457V228.457C170.199 228.457 169.194 228.164 168.344 227.617L166.72 230.139ZM171.41 231.457C172.366 231.457 173.281 231.331 174.142 231.063L173.252 228.198C172.711 228.366 172.101 228.457 171.41 228.457V231.457ZM174.137 231.065C175.002 230.799 175.792 230.405 176.493 229.874L174.679 227.484C174.281 227.786 173.812 228.026 173.257 228.197L174.137 231.065ZM176.505 229.864C177.205 229.321 177.785 228.662 178.239 227.896L175.66 226.365C175.395 226.811 175.065 227.185 174.666 227.494L176.505 229.864ZM178.23 227.911C178.706 227.132 179.021 226.264 179.192 225.327L176.241 224.787C176.128 225.403 175.932 225.918 175.669 226.35L178.23 227.911ZM177.71 226.557L183.931 226.585L183.945 223.585L177.723 223.557L177.71 226.557ZM182.449 224.906C182.31 226.055 181.964 227.171 181.4 228.258L184.062 229.64C184.786 228.246 185.244 226.786 185.427 225.265L182.449 224.906ZM181.397 228.262C180.85 229.324 180.107 230.285 179.154 231.146L181.165 233.372C182.372 232.281 183.343 231.036 184.064 229.636L181.397 228.262ZM179.155 231.145C178.236 231.975 177.121 232.65 175.789 233.158L176.86 235.961C178.502 235.333 179.944 234.474 181.165 233.372L179.155 231.145ZM175.794 233.157C174.514 233.641 173.027 233.898 171.31 233.898V236.898C173.325 236.898 175.181 236.596 176.855 235.963L175.794 233.157ZM171.31 233.898C168.951 233.898 166.893 233.366 165.097 232.335L163.603 234.937C165.898 236.255 168.481 236.898 171.31 236.898V233.898ZM165.1 232.337C163.325 231.313 161.907 229.828 160.845 227.833L158.196 229.241C159.502 231.696 161.303 233.611 163.601 234.936L165.1 232.337ZM160.847 227.837C159.812 225.876 159.259 223.435 159.259 220.455H156.259C156.259 223.8 156.88 226.747 158.194 229.237L160.847 227.837ZM159.259 220.455C159.259 217.467 159.821 215.025 160.871 213.067L158.227 211.649C156.891 214.141 156.259 217.097 156.259 220.455H159.259ZM160.871 213.067C161.941 211.071 163.367 209.591 165.149 208.576L163.665 205.969C161.356 207.284 159.544 209.194 158.227 211.649L160.871 213.067ZM165.154 208.574C166.953 207.541 168.993 207.011 171.31 207.011V204.011C168.514 204.011 165.952 204.656 163.66 205.972L165.154 208.574ZM171.31 207.011C172.854 207.011 174.257 207.228 175.529 207.646L176.467 204.797C174.86 204.268 173.137 204.011 171.31 204.011V207.011ZM175.532 207.647C176.816 208.067 177.934 208.673 178.901 209.459L180.794 207.132C179.526 206.1 178.077 205.323 176.464 204.796L175.532 207.647ZM178.907 209.464C179.862 210.233 180.644 211.178 181.253 212.314L183.897 210.896C183.104 209.418 182.067 208.157 180.788 207.127L178.907 209.464ZM181.257 212.321C181.864 213.439 182.269 214.747 182.449 216.269L185.428 215.918C185.21 214.069 184.706 212.385 183.893 210.889L181.257 212.321ZM187.241 210.98H185.741V212.48H187.241V210.98ZM187.241 205.909V204.409H185.741V205.909H187.241ZM211.133 205.909H212.633V204.409H211.133V205.909ZM211.133 210.98V212.48H212.633V210.98H211.133ZM202.227 210.98V209.48H200.727V210.98H202.227ZM202.227 235V236.5H203.727V235H202.227ZM196.147 235H194.647V236.5H196.147V235ZM196.147 210.98H197.647V209.48H196.147V210.98ZM188.741 210.98V205.909H185.741V210.98H188.741ZM187.241 207.409H211.133V204.409H187.241V207.409ZM209.633 205.909V210.98H212.633V205.909H209.633ZM211.133 209.48H202.227V212.48H211.133V209.48ZM200.727 210.98V235H203.727V210.98H200.727ZM202.227 233.5H196.147V236.5H202.227V233.5ZM197.647 235V210.98H194.647V235H197.647ZM196.147 209.48H187.241V212.48H196.147V209.48ZM238.668 228.551L237.349 227.838L237.346 227.842L238.668 228.551ZM233.782 233.651L234.522 234.956L234.524 234.954L233.782 233.651ZM219.89 233.636L220.634 232.334L219.89 233.636ZM215.018 228.537L213.696 229.246L215.018 228.537ZM215.018 212.358L216.34 213.067L215.018 212.358ZM219.89 207.273L220.63 208.578L220.634 208.575L219.89 207.273ZM233.782 207.273L233.038 208.575L233.045 208.579L233.782 207.273ZM238.668 212.358L237.346 213.067L237.349 213.071L238.668 212.358ZM233.313 215.256L231.935 215.848L231.938 215.855L233.313 215.256ZM230.742 212.045L229.918 213.298L230.742 212.045ZM222.958 212.045L223.783 213.298L222.958 212.045ZM220.373 215.256L218.998 214.656L218.995 214.664L220.373 215.256ZM220.373 225.653L218.995 226.245L218.998 226.253L220.373 225.653ZM222.958 228.864L223.783 227.611L222.958 228.864ZM230.742 228.864L229.918 227.611L230.742 228.864ZM233.313 225.653L231.938 225.054L231.935 225.061L233.313 225.653ZM238.972 220.455C238.972 223.44 238.407 225.88 237.349 227.838L239.988 229.264C241.335 226.771 241.972 223.814 241.972 220.455H238.972ZM237.346 227.842C236.278 229.835 234.843 231.321 233.04 232.347L234.524 234.954C236.849 233.631 238.672 231.718 239.99 229.26L237.346 227.842ZM233.042 232.346C231.232 233.372 229.18 233.898 226.85 233.898V236.898C229.653 236.898 232.222 236.259 234.522 234.956L233.042 232.346ZM226.85 233.898C224.501 233.898 222.442 233.367 220.634 232.334L219.146 234.939C221.448 236.254 224.029 236.898 226.85 236.898V233.898ZM220.634 232.334C218.84 231.309 217.409 229.823 216.34 227.828L213.696 229.246C215.013 231.702 216.83 233.615 219.146 234.939L220.634 232.334ZM216.34 227.828C215.289 225.869 214.728 223.431 214.728 220.455H211.728C211.728 223.803 212.36 226.754 213.696 229.246L216.34 227.828ZM214.728 220.455C214.728 217.467 215.29 215.025 216.34 213.067L213.696 211.649C212.36 214.141 211.728 217.097 211.728 220.455H214.728ZM216.34 213.067C217.409 211.073 218.838 209.593 220.63 208.578L219.15 205.968C216.832 207.282 215.013 209.192 213.696 211.649L216.34 213.067ZM220.634 208.575C222.442 207.542 224.501 207.011 226.85 207.011V204.011C224.029 204.011 221.448 204.655 219.146 205.97L220.634 208.575ZM226.85 207.011C229.178 207.011 231.228 207.541 233.038 208.575L234.526 205.97C232.226 204.656 229.655 204.011 226.85 204.011V207.011ZM233.045 208.579C234.845 209.595 236.278 211.075 237.346 213.067L239.99 211.649C238.672 209.19 236.847 207.28 234.519 205.966L233.045 208.579ZM237.349 213.071C238.407 215.029 238.972 217.469 238.972 220.455H241.972C241.972 217.095 241.335 214.138 239.988 211.645L237.349 213.071ZM235.737 220.455C235.737 218.259 235.409 216.308 234.688 214.656L231.938 215.855C232.449 217.025 232.737 218.541 232.737 220.455H235.737ZM234.691 214.664C233.988 213.027 232.957 211.707 231.567 210.792L229.918 213.298C230.743 213.842 231.426 214.663 231.935 215.848L234.691 214.664ZM231.567 210.792C230.185 209.883 228.593 209.452 226.85 209.452V212.452C228.08 212.452 229.083 212.749 229.918 213.298L231.567 210.792ZM226.85 209.452C225.107 209.452 223.515 209.883 222.133 210.792L223.783 213.298C224.617 212.749 225.62 212.452 226.85 212.452V209.452ZM222.133 210.792C220.746 211.706 219.711 213.022 218.998 214.656L221.748 215.855C222.266 214.667 222.955 213.843 223.783 213.298L222.133 210.792ZM218.995 214.664C218.286 216.313 217.964 218.261 217.964 220.455H220.964C220.964 218.538 221.248 217.02 221.751 215.848L218.995 214.664ZM217.964 220.455C217.964 222.648 218.286 224.596 218.995 226.245L221.751 225.061C221.248 223.889 220.964 222.371 220.964 220.455H217.964ZM218.998 226.253C219.711 227.887 220.746 229.203 222.133 230.117L223.783 227.611C222.955 227.066 222.266 226.242 221.748 225.054L218.998 226.253ZM222.133 230.117C223.515 231.026 225.107 231.457 226.85 231.457V228.457C225.62 228.457 224.617 228.16 223.783 227.611L222.133 230.117ZM226.85 231.457C228.593 231.457 230.185 231.026 231.567 230.117L229.918 227.611C229.083 228.16 228.08 228.457 226.85 228.457V231.457ZM231.567 230.117C232.957 229.202 233.988 227.883 234.691 226.245L231.935 225.061C231.426 226.246 230.743 227.067 229.918 227.611L231.567 230.117ZM234.688 226.253C235.409 224.601 235.737 222.65 235.737 220.455H232.737C232.737 222.369 232.449 223.884 231.938 225.054L234.688 226.253ZM245.028 235H243.528V236.5H245.028V235ZM245.028 205.909V204.409H243.528V205.909H245.028ZM262.131 207.088L261.453 208.426L261.463 208.431L262.131 207.088ZM265.696 210.398L264.393 211.14L264.398 211.15L265.696 210.398ZM265.682 220.398L266.967 221.172L266.969 221.168L265.682 220.398ZM262.06 223.58L261.425 222.22L261.422 222.222L262.06 223.58ZM248.665 224.688H247.165V226.188H248.665V224.688ZM248.665 219.744V218.244H247.165V219.744H248.665ZM258.281 219.261L258.856 220.647L258.281 219.261ZM260.014 217.812L258.73 217.038L258.725 217.045L258.721 217.052L260.014 217.812ZM260.014 212.969L258.712 213.713L258.716 213.72L258.72 213.727L260.014 212.969ZM258.267 211.463L257.65 212.83L257.66 212.835L257.67 212.839L258.267 211.463ZM251.179 210.938V209.438H249.679V210.938H251.179ZM251.179 235V236.5H252.679V235H251.179ZM260.739 221.761L262.055 221.042L261.629 220.261H260.739V221.761ZM267.969 235V236.5H270.497L269.285 234.281L267.969 235ZM261.179 235L259.856 235.707L260.28 236.5H261.179V235ZM254.105 221.761V220.261H251.603L252.782 222.468L254.105 221.761ZM246.528 235V205.909H243.528V235H246.528ZM245.028 207.409H256.506V204.409H245.028V207.409ZM256.506 207.409C258.527 207.409 260.158 207.771 261.453 208.426L262.808 205.75C260.997 204.833 258.878 204.409 256.506 204.409V207.409ZM261.463 208.431C262.776 209.084 263.735 209.985 264.393 211.14L266.999 209.655C266.028 207.95 264.611 206.646 262.798 205.745L261.463 208.431ZM264.398 211.15C265.069 212.306 265.432 213.708 265.432 215.412H268.432C268.432 213.271 267.971 211.331 266.994 209.645L264.398 211.15ZM265.432 215.412C265.432 217.124 265.064 218.509 264.395 219.627L266.969 221.168C267.966 219.502 268.432 217.563 268.432 215.412H265.432ZM264.397 219.623C263.73 220.73 262.759 221.597 261.425 222.22L262.694 224.939C264.523 224.085 265.967 222.831 266.966 221.172L264.397 219.623ZM261.422 222.222C260.098 222.844 258.425 223.188 256.349 223.188V226.188C258.744 226.188 260.877 225.792 262.698 224.937L261.422 222.222ZM256.349 223.188H248.665V226.188H256.349V223.188ZM250.165 224.688V219.744H247.165V224.688H250.165ZM248.665 221.244H255.355V218.244H248.665V221.244ZM255.355 221.244C256.654 221.244 257.84 221.068 258.856 220.647L257.707 217.876C257.169 218.099 256.405 218.244 255.355 218.244V221.244ZM258.856 220.647C259.894 220.217 260.743 219.533 261.307 218.573L258.721 217.052C258.528 217.38 258.222 217.662 257.707 217.876L258.856 220.647ZM261.299 218.587C261.862 217.654 262.097 216.568 262.097 215.412H259.097C259.097 216.169 258.943 216.683 258.73 217.038L261.299 218.587ZM262.097 215.412C262.097 214.247 261.862 213.156 261.309 212.211L258.72 213.727C258.943 214.108 259.097 214.645 259.097 215.412H262.097ZM261.317 212.225C260.758 211.246 259.909 210.54 258.864 210.087L257.67 212.839C258.197 213.068 258.513 213.365 258.712 213.713L261.317 212.225ZM258.884 210.096C257.854 209.631 256.646 209.438 255.327 209.438V212.438C256.375 212.438 257.128 212.595 257.65 212.83L258.884 210.096ZM255.327 209.438H251.179V212.438H255.327V209.438ZM249.679 210.938V235H252.679V210.938H249.679ZM251.179 233.5H245.028V236.5H251.179V233.5ZM259.422 222.48L266.652 235.719L269.285 234.281L262.055 221.042L259.422 222.48ZM267.969 233.5H261.179V236.5H267.969V233.5ZM262.502 234.293L255.428 221.054L252.782 222.468L259.856 235.707L262.502 234.293ZM254.105 223.261H260.739V220.261H254.105V223.261Z'
      fill='#010015'
    />
    <path
      d='M111.321 136V63.2727H160.327V75.9503H126.697V93.2798H157.805V105.957H126.697V123.322H160.469V136H111.321Z'
      fill='white'
    />
    <path
      d='M111.321 136H108.821V138.5H111.321V136ZM111.321 63.2727V60.7727H108.821V63.2727H111.321ZM160.327 63.2727H162.827V60.7727H160.327V63.2727ZM160.327 75.9503V78.4503H162.827V75.9503H160.327ZM126.697 75.9503V73.4503H124.197V75.9503H126.697ZM126.697 93.2798H124.197V95.7798H126.697V93.2798ZM157.805 93.2798H160.305V90.7798H157.805V93.2798ZM157.805 105.957V108.457H160.305V105.957H157.805ZM126.697 105.957V103.457H124.197V105.957H126.697ZM126.697 123.322H124.197V125.822H126.697V123.322ZM160.469 123.322H162.969V120.822H160.469V123.322ZM160.469 136V138.5H162.969V136H160.469ZM113.821 136V63.2727H108.821V136H113.821ZM111.321 65.7727H160.327V60.7727H111.321V65.7727ZM157.827 63.2727V75.9503H162.827V63.2727H157.827ZM160.327 73.4503H126.697V78.4503H160.327V73.4503ZM124.197 75.9503V93.2798H129.197V75.9503H124.197ZM126.697 95.7798H157.805V90.7798H126.697V95.7798ZM155.305 93.2798V105.957H160.305V93.2798H155.305ZM157.805 103.457H126.697V108.457H157.805V103.457ZM124.197 105.957V123.322H129.197V105.957H124.197ZM126.697 125.822H160.469V120.822H126.697V125.822ZM157.969 123.322V136H162.969V123.322H157.969ZM160.469 133.5H111.321V138.5H160.469V133.5Z'
      fill='#C1C70E'
    />
  </svg>
);