/**
 * Утилита для защиты контактных данных от парсинга ботами
 * Использует Base64 кодирование и разделение данных на части
 */

/**
 * Декодирует и собирает контактные данные из закодированных частей
 * @param parts - массив Base64 закодированных частей данных
 * @returns декодированная строка
 */
export function decodeContactData(parts: string[]): string {
  if (!parts || parts.length === 0) {
    return "";
  }

  try {
    const decodedParts = parts.map((part) => {
      // Декодируем Base64
      const decoded = atob(part);
      // Удаляем невидимые символы (zero-width spaces, etc.)
      return decoded.replace(/[\u200B-\u200D\uFEFF]/g, "");
    });

    return decodedParts.join("");
  } catch (error) {
    console.error("Ошибка декодирования контактных данных:", error);
    return "";
  }
}

/**
 * Предопределенные закодированные контактные данные
 * Данные разделены на части и закодированы в Base64 для защиты от парсинга
 */

// Контактный телефон из Contact.tsx: +7 (962) 218-3656
// Разделен на части: "+7 (9", "62) 2", "18-3656"
export const contactPhoneParts = ["KzcgKDk=", "NjIpIDI=", "MTgtMzY1Ng=="];

// Email из Contact.tsx: info@nurosystems.tech
// Разделен на части: "info@", "nuros", "ystems.tech"
export const contactEmailParts = ["aW5mb0A=", "bnVyb3M=", "eXN0ZW1zLnRlY2g="];

// Телефон из Footer.tsx: +7 (961) 218-3656
// Разделен на части: "+7 (9", "61) 2", "18-3656"
export const footerPhoneParts = ["KzcgKDk=", "NjEpIDI=", "MTgtMzY1Ng=="];

// Email из Footer.tsx: info@nurosystems.tech
// Разделен на части: "info@", "nuros", "ystems.tech"
export const footerEmailParts = ["aW5mb0A=", "bnVyb3M=", "eXN0ZW1zLnRlY2g="];

