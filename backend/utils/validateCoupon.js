const validateCoupon = ({ code, discount, expired, count }) => {
  const errors = {};

  if (!code || typeof code !== "string" || code.trim() === "") {
    errors.code = "Kod zorunludur ve boş olamaz.";
  }

  if (discount == null || typeof discount !== "number" || discount < 0 || discount > 100) {
    errors.discount = "İndirim oranı 0 ile 100 arasında bir sayı olmalıdır.";
  }

  if (!expired || isNaN(new Date(expired).getTime())) {
    errors.expired = "Geçerli bir son kullanma tarihi belirtilmelidir.";
  }

  if (count == null || typeof count !== "number" || count < 1) {
    errors.count = "Kullanım sayısı en az 1 olmalıdır.";
  }

  const isValid = Object.keys(errors).length === 0;

  return { isValid, errors };
};

module.exports = validateCoupon;