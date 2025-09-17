interface CookieOptions {
  path?: string;
  domain?: string;
  expires?: Date;
  "max-age"?: number;
  secure?: boolean;
  samesite?: "Strict" | "Lax" | "None";
  [key: string]: string | number | boolean | Date | undefined;
}

export function setCookie(
  name: string,
  value: string,
  options: CookieOptions = {},
) {
  // 여기에 코드를 작성하세요.
  options = {
    path: "/",
    ...options,
  };

  let cookieString = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (const optionKey in options) {
    const optionValue = options[optionKey];

    if (
      optionValue === null ||
      optionValue === undefined ||
      optionValue === false
    ) {
      continue;
    }

    let finalValue = optionValue;
    if (optionValue instanceof Date) {
      finalValue = optionValue.toUTCString();
    }

    cookieString += `; ${optionKey}`;
    if (finalValue !== true) {
      cookieString += `=${finalValue}`;
    }
    document.cookie = cookieString;
  }
}

export function isCookieExists(name: string) {
  // 여기에 코드를 작성하세요.
  const encodeName = encodeURIComponent(name);
  return document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith(encodeName + "="))
    ? true
    : false;
}

export function deleteCookie(name: string) {
  // 여기에 코드를 작성하세요.
}
