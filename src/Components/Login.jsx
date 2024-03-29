import React from "react";
import { useState } from "react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [fullName, setFullName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [password, setPasswordName] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const handleRegister = () => {
    if (
      fullName !== "" &&
      email !== "" &&
      phoneNumber !== "" &&
      password !== "" &&
      !emailError &&
      !phoneError &&
      !nameError &&
      !passwordError
    ) {
      setNameError(false);
      setEmailError(false);
      setPhoneError(false);
      setPasswordError(false);
      const newUrl = `/home`;
      window.location.href = newUrl;
    } else {
      // alert("Faltan campos por rellenar");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    let formattedPhoneNumber = event.target.value;
    formattedPhoneNumber = formattedPhoneNumber.replace(/\D/g, ""); // Elimina todos los caracteres no numéricos.
    formattedPhoneNumber = formattedPhoneNumber.replace(
      /^(\d{2})(\d*)/,
      "+$1 $2"
    ); // Agrega un '+' y un espacio después de los primeros 2 dígitos.

    formattedPhoneNumber = formattedPhoneNumber.replace(/(\d{2})(\d)/, "$1 $2"); // Agrega un espacio después de los segundos 2 dígitos.
    formattedPhoneNumber = formattedPhoneNumber.replace(/(\d{4})(\d)/, "$1 $2"); // Agrega un espacio después de los siguientes 4 dígitos.

    setPhoneNumber(formattedPhoneNumber);
  };

  const validateName = () => {
    const regex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
    const isValid = regex.test(fullName);
    setNameError(!isValid);
  };

  const validateEmail = () => {
    const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    const isValid = regex.test(email);
    setEmailError(!isValid);
  };

  const validatePhoneNumber = () => {
    const regex = /^\+\d{2}\s\d{2}\s\d{4}\s\d{3}$/;
    const isValid = regex.test(phoneNumber); // Validar con o sin el signo '+'.
    setPhoneError(!isValid);
  };

  const validatePassword = () => {
    const regex = /^.{8,}$/;
    const isValid = regex.test(password);
    setPasswordError(!isValid);
  };

  return (
    <div className="flex">
      <div className="mt-2 flex-1">
        <div className="flex justify-between items-center pl-[24px] pb-[16px] pt-[16px] border-b border-gray-300 xl:pt-[28px] xl:pl-[48px]  ">
          <svg
            width="134"
            height="40"
            viewBox="0 0 134 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M106.18 34.8396C109.142 34.8396 110.608 33.5022 112.075 29.9556L118.167 15.3236C118.266 15.0957 118.395 14.541 118.395 14.1546C118.395 12.8469 117.315 11.8761 116.047 11.8761C114.779 11.8761 114.056 12.7281 113.67 13.7682L110.024 23.8829L106.24 13.7187C105.814 12.5497 105.1 11.8662 103.862 11.8662C102.495 11.8662 101.415 12.8469 101.415 14.2438C101.415 14.5707 101.544 15.0561 101.673 15.383L107.636 29.2027L107.478 29.5891C107.022 30.4708 106.596 30.6293 105.715 30.6293C105.358 30.6293 105.1 30.5599 104.674 30.4312C104.476 30.3618 104.248 30.3024 103.862 30.3024C102.851 30.3024 101.91 31.1147 101.91 32.3233C101.91 33.5319 102.762 34.1164 103.476 34.374C104.298 34.6712 105.071 34.8396 106.18 34.8396Z"
              fill="#7065F0"
            />
            <path
              d="M84.0587 27.6374C84.0587 28.8757 85.0692 29.7871 86.3769 29.7871C87.2586 29.7871 87.9421 29.2323 88.5266 28.519L92.0434 23.8927L95.5603 28.519C96.2141 29.3314 96.8977 29.7871 97.8784 29.7871C99.1168 29.7871 100.157 28.9054 100.157 27.5086C100.157 26.8547 99.8994 26.2702 99.3446 25.6164L94.9758 20.5938L99.2158 15.6405C99.6022 15.155 99.8994 14.63 99.8994 13.9464C99.8994 12.7081 98.8889 11.7967 97.5812 11.7967C96.6995 11.7967 96.016 12.3515 95.4315 13.0647L92.1425 17.3642L88.913 13.0647C88.2591 12.2524 87.5756 11.7967 86.5948 11.7967C85.3565 11.7967 84.3163 12.6784 84.3163 14.0752C84.3163 14.729 84.5739 15.3135 85.1286 15.9674L89.2002 20.6631L84.7423 25.9433C84.3163 26.4287 84.0587 26.9538 84.0587 27.6374Z"
              fill="#7065F0"
            />
            <path
              d="M83.5237 20.1379C83.5237 16.522 80.948 11.7272 75.113 11.7272C70.0309 11.7272 66.4744 15.8285 66.4744 20.8215V20.8908C66.4744 26.2305 70.3479 29.9157 75.5984 29.9157C78.1444 29.9157 80.1257 29.1034 81.6613 27.7957C82.0179 27.4688 82.3151 26.9834 82.3151 26.3295C82.3151 25.22 81.5027 24.3779 80.3932 24.3779C79.8682 24.3779 79.5412 24.5067 79.1846 24.7643C78.1741 25.5172 77.0349 25.9333 75.6678 25.9333C73.4487 25.9333 71.8834 24.7643 71.398 22.5155H81.2055C82.5132 22.5155 83.5237 21.5744 83.5237 20.1379ZM71.3386 19.4246C71.7249 17.1758 73.0623 15.7097 75.1229 15.7097C77.2132 15.7097 78.511 17.2056 78.8081 19.4246H71.3386Z"
              fill="#7065F0"
            />
            <path
              d="M59.4607 27.2406C59.4607 28.6077 60.5702 29.7173 61.9373 29.7173C63.3045 29.7173 64.414 28.6077 64.414 27.2406V8.02179C64.414 6.65468 63.3045 5.54514 61.9373 5.54514C60.5702 5.54514 59.4607 6.65468 59.4607 8.02179V27.2406Z"
              fill="#7065F0"
            />
            <path
              d="M48.0684 27.241C48.0684 28.6082 49.178 29.7177 50.5451 29.7177C51.9122 29.7177 53.0217 28.6082 53.0217 27.241V16.2942H55.112C56.2513 16.2942 57.1627 15.4126 57.1627 14.2733C57.1627 13.134 56.2513 12.2523 55.112 12.2523H52.9623V11.5688C52.9623 10.2611 53.6161 9.67663 54.7554 9.67663H55.1814C56.2909 9.67663 57.2023 8.7355 57.2023 7.62596C57.2023 6.51642 56.3503 5.77343 55.5083 5.63474C54.9535 5.53567 54.27 5.50595 53.4873 5.50595C51.724 5.50595 50.3965 5.96165 49.4752 6.87306C48.5638 7.78447 48.0783 9.19121 48.0783 11.1131V12.2226H47.8802C46.7409 12.2226 45.8295 13.134 45.8295 14.2733C45.8295 15.4126 46.7409 16.2942 47.8802 16.2942H48.0783V27.241H48.0684Z"
              fill="#7065F0"
            />
            <path
              d="M37.6267 11.6275L30.4345 6.04019C28.6513 4.65327 25.9468 4.65327 24.1636 6.04019L16.9714 11.6275C16.3671 12.103 15.8619 12.7172 15.5151 13.4206C15.1783 14.1141 15 14.8967 15 15.6595V25.368C15 26.4973 15.4359 27.5573 16.2383 28.3499C17.0309 29.1424 18.0909 29.5882 19.2202 29.5882H35.3977C36.5072 29.5882 37.597 29.1424 38.3796 28.3499C39.1721 27.5573 39.6179 26.4973 39.6179 25.368V15.6595C39.608 14.0745 38.8848 12.6083 37.6267 11.6275Z"
              fill="#7065F0"
            />
            <path
              d="M33.6839 16.076C33.0994 16.0265 32.5644 16.2841 32.2276 16.71C32.1385 16.819 30.1175 19.2957 27.4526 19.3353C25.7487 19.365 24.0448 18.3644 22.3606 16.3831C22.0833 16.0463 21.687 15.8284 21.2214 15.7788C20.31 15.6996 19.4976 16.3732 19.4184 17.2846C19.3788 17.7502 19.5373 18.196 19.8146 18.523C22.1823 21.3166 24.7779 22.7134 27.5319 22.654C31.6431 22.5748 34.4665 19.2164 34.8033 18.7805C34.8132 18.7706 34.8231 18.7607 34.8331 18.7508L34.843 18.7409C35.0312 18.4932 35.16 18.196 35.1897 17.8691C35.2689 16.9676 34.5953 16.1553 33.6839 16.076Z"
              fill="white"
            />
          </svg>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="block xl:hidden mr-[24px]"
          >
            <path
              d="M3 8H21"
              stroke="#000929"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3 16H21"
              stroke="#000929"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <div className="text-center xl:max-w-md xl:mx-auto mb-2 mt-14 xl:mt-20 ">
            <h3 className="font-bold mb-4 text-4xl xl:text-left text-[32px]">
              ¡Bienvenido!
            </h3>
            <p className="text-[#000929] text-[16px] opacity-50 xl:text-left">
              Convertite ahora en un agente Flexy.
            </p>
          </div>

          <div className="flex-1 p-5">
            <form className="max-w-md mx-auto">
              <div className="mb-4 flex items-center">
                <svg
                  width="47"
                  height="47"
                  viewBox="0 0 47 47"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <circle
                    cx="23.5"
                    cy="23.5"
                    r="23"
                    fill="#F7F7FD"
                    stroke="#E0DEF7"
                  />
                  <g opacity="0.5">
                    <path
                      d="M20.875 32.25H26.125C30.5 32.25 32.25 30.5 32.25 26.125V20.875C32.25 16.5 30.5 14.75 26.125 14.75H20.875C16.5 14.75 14.75 16.5 14.75 20.875V26.125C14.75 30.5 16.5 32.25 20.875 32.25Z"
                      stroke="#000929"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.875 21.75C21.8415 21.75 22.625 20.9665 22.625 20C22.625 19.0335 21.8415 18.25 20.875 18.25C19.9085 18.25 19.125 19.0335 19.125 20C19.125 20.9665 19.9085 21.75 20.875 21.75Z"
                      stroke="#000929"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.3362 29.5813L19.65 26.685C20.3412 26.2213 21.3387 26.2738 21.96 26.8075L22.2487 27.0613C22.9312 27.6475 24.0337 27.6475 24.7162 27.0613L28.3562 23.9375C29.0387 23.3513 30.1412 23.3513 30.8237 23.9375L32.25 25.1625"
                      stroke="#000929"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <g clipPath="url(#clip0_1_2094)">
                    <path
                      d="M31 13.6667V20.3333"
                      stroke="#47BEA3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M27.6667 17H34.3334"
                      stroke="#47BEA3"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_2094">
                      <rect
                        width="10"
                        height="10"
                        fill="white"
                        transform="translate(26 12)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <h2 className="font-medium text-[#000929] text-[16px]">
                  Subí tu foto de perfil
                </h2>
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  value={fullName}
                  onChange={handleNameChange}
                  onBlur={validateName}
                  className={`w-full border border-[#E0DEF7] rounded-md px-4 py-2 text-[16px] ${
                    nameError ? "border-red-500" : "bg-[#F7F7FD] bg-opacity-50"
                  }`}
                  placeholder="Nombre y Apellido"
                  id="name"
                />
                {nameError && (
                  <p className="text-red-500">
                    Por favor ingresa un nombre y apellido válido.
                  </p>
                )}
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  onBlur={validatePhoneNumber}
                  className={`w-full border border-[#E0DEF7] rounded-md px-4 py-2 bg-[#F7F7FD] bg-opacity-50 text-[16px] ${
                    phoneError ? "border-red-500" : ""
                  }`}
                  placeholder="+54 01 0200 000"
                  id="phone"
                />
                {phoneError && (
                  <p className="text-red-500 text-left">
                    Por favor, introduce un número de teléfono válido.
                  </p>
                )}
              </div>

              <div className="mb-6">
                <input
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={validateEmail}
                  className="w-full border border-[#E0DEF7] rounded-md px-4 py-2 bg-[#F7F7FD] bg-opacity-50 text-[16px]"
                  placeholder="hola@tuemail.com"
                  id="email"
                />
                {emailError && (
                  <p className="text-red-500 ">
                    Por favor, introduce una dirección de correo electrónico
                    válida.
                  </p>
                )}
              </div>

              <div className="mb-4 relative text-[#000929]">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={validatePassword}
                  className="w-full border border-[#E0DEF7] rounded-md px-4 py-2 bg-[#F7F7FD] bg-opacity-50 text-[16px]"
                  placeholder="Ingresá tu contraseña"
                  id="password"
                />
                {passwordError && (
                  <p className="text-red-500">
                    Por favor, introduce una password válida.
                  </p>
                )}
                <span
                  className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 15v-2a2 2 0 012-2h2a2 2 0 012 2v2m-6 2h.01M5 12h.01M19 12h.01"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.42001 13.98 8.42001 12C8.42001 10.02 10.02 8.42 12 8.42C13.98 8.42 15.58 10.02 15.58 12Z"
                        stroke="#9EA3AE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.4C18.82 5.8 15.53 3.72 12 3.72C8.47 3.72 5.18 5.8 2.89 9.4C1.99 10.81 1.99 13.18 2.89 14.59C5.18 18.19 8.47 20.27 12 20.27Z"
                        stroke="#9EA3AE"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
              </div>
            </form>

            <h3 className="text-center text-[#6C727F] mb-6 hidden xl:block text-[14px] font-normal">
              Debe tener al menos 8 caracteres.
            </h3>

            <p className="text-center text-[#7065F0] mb-6 block xl:hidden text-[14px] font-medium">
              ¿Olvidaste tu contraseña?
            </p>

            <div className="flex justify-center mb-6">
              <button
                onClick={handleRegister}
                className="bg-[#7065F0] max-w-md text-[#FFFFFF] py-[12px] px-[24px] w-full font-bold text-[16px] rounded-[8px]"
              >
                Registrate
              </button>
            </div>

            <p className="text-center text-[#6C727F] text-[14px] font-medium ">
              ¿Ya tenés una cuenta?{" "}
              <b className="text-[#000929] font-bold">Iniciá Sesión</b>
            </p>
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        <img src="./src/assets/imagen01.png" alt="Imagen de bienvenida" />
      </div>
    </div>
  );
};

export default Login;
