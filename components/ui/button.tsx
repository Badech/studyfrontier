import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-display font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        // Primary: Deep Navy - Main brand CTA
        default: "bg-navy-900 text-white hover:bg-navy-800 shadow-md hover:shadow-lg transition-all duration-200",
        
        // Gold: Premium accent - Special CTAs
        gold: "bg-gold-400 text-navy-900 hover:bg-gold-500 shadow-md hover:shadow-lg btn-glow transition-all duration-200",
        
        // Premium: Gold gradient - Hero CTAs
        premium: "bg-gradient-to-r from-gold-400 to-gold-600 text-navy-900 hover:from-gold-500 hover:to-gold-700 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] premium-glow font-bold",
        
        // Outline: Navy border - Secondary actions
        outline: "border-2 border-navy-900 text-navy-900 bg-transparent hover:bg-navy-900 hover:text-white transition-all duration-200",
        
        // Secondary: Light navy - Tertiary actions
        secondary: "bg-navy-100 text-navy-900 hover:bg-navy-200 transition-all duration-200",
        
        // Ghost: Minimal - Inline actions
        ghost: "text-navy-700 hover:bg-navy-50 hover:text-navy-900 transition-all duration-200",
        
        // Destructive: Error actions
        destructive: "bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg transition-all duration-200",
        
        // WhatsApp: Messaging CTA
        whatsapp: "bg-[#25D366] text-white hover:bg-[#20BD5A] shadow-md hover:shadow-lg whatsapp-pulse transition-all duration-200",
      },
      size: {
        default: "h-12 px-6 py-3 text-base",
        sm: "h-9 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-lg",
        xl: "h-16 px-10 py-5 text-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
