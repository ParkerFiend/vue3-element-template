/**
 * 校验邮箱是否符合规则
 * @param s 邮箱字符串
 */
export function validateEmail(s: string) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    s,
  );
}

/**
 * 校验手机号码是否符合规则
 * @param s 手机号字符串
 */
export function validateMobile(s: string) {
  return /^1[0-9]{10}$/.test(s);
}
