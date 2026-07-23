export const PAYMENT_METHODS = {
  CARD: 'card',
  APPLE_PAY: 'apple_pay',
  GOOGLE_PAY: 'google_pay',
} as const;

export const SERVICE_FEE_PERCENTAGE = 0.08; // 8%
export const BOOKING_PROTECTION_FEE = 0.50; // €0.50

export interface PriceBreakdown {
  pricePerSeat: number;
  seats: number;
  subtotal: number;
  serviceFee: number;
  protection: number;
  total: number;
}

export function calculatePriceBreakdown(
  pricePerSeat: number,
  seats: number
): PriceBreakdown {
  const subtotal = pricePerSeat * seats;
  const serviceFee = subtotal * SERVICE_FEE_PERCENTAGE;
  const protection = BOOKING_PROTECTION_FEE;
  const total = subtotal + serviceFee + protection;

  return {
    pricePerSeat,
    seats,
    subtotal,
    serviceFee,
    protection,
    total,
  };
}

export function formatCurrency(amount: number): string {
  return `€${amount.toFixed(2)}`;
}

export function formatCardNumber(value: string): string {
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  const matches = v.match(/\d{4,16}/g);
  const match = (matches && matches[0]) || '';
  const parts = [];

  for (let i = 0, len = match.length; i < len; i += 4) {
    parts.push(match.substring(i, i + 4));
  }

  if (parts.length) {
    return parts.join(' ');
  } else {
    return value;
  }
}

export function formatExpiryDate(value: string): string {
  const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  if (v.length >= 2) {
    return v.slice(0, 2) + '/' + v.slice(2, 4);
  }
  return v;
}

export function generateBookingReference(): string {
  const date = new Date();
  const timestamp = date.getTime().toString().slice(-6);
  const random = Math.random().toString(36).substring(2, 8).toUpperCase();
  return `VOYA${random}${timestamp}`;
}
