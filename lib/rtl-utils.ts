/**
 * RTL Utility Functions
 * Provides helpers for handling RTL layouts dynamically
 */

/**
 * Returns RTL-aware directional class names
 */
export function rtlClass(ltrClass: string, rtlClass: string, isRTL: boolean): string {
  return isRTL ? rtlClass : ltrClass;
}

/**
 * Returns appropriate side for RTL (flips left/right)
 */
export function rtlSide(side: 'left' | 'right', isRTL: boolean): 'left' | 'right' {
  if (!isRTL) return side;
  return side === 'left' ? 'right' : 'left';
}

/**
 * Returns RTL-aware start/end classes (using logical properties)
 */
export const rtl = {
  // Margin
  ms: (value: string) => `ms-${value}`, // margin-inline-start
  me: (value: string) => `me-${value}`, // margin-inline-end
  
  // Padding
  ps: (value: string) => `ps-${value}`, // padding-inline-start
  pe: (value: string) => `pe-${value}`, // padding-inline-end
  
  // Positioning
  start: (value: string) => `start-${value}`, // left in LTR, right in RTL
  end: (value: string) => `end-${value}`,     // right in LTR, left in RTL
  
  // Text alignment
  textStart: 'text-start', // text-left in LTR, text-right in RTL
  textEnd: 'text-end',     // text-right in LTR, text-left in RTL
  
  // Flex direction
  flexRow: 'flex-row', // automatically reverses in RTL with dir="rtl"
};

/**
 * Conditional RTL classes
 */
export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}
