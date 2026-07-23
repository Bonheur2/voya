# Voya Authentication System

Complete authentication pages and components for the Voya carpooling platform.

## Pages Implemented

### 1. **Login Page** (`/auth/login`)
- Email and password inputs
- "Forgot password?" quick link
- "Remember me" checkbox
- Form validation
- Sign up link
- Hero image with carpooling theme

### 2. **Signup Page** (`/auth/signup`)
- First name and last name fields (side-by-side on desktop)
- Email input
- Password with real-time strength indicator
- Confirm password field
- Terms & Privacy Policy acceptance
- Sign in link
- Hero image with diverse group

### 3. **Forgot Password Page** (`/auth/forgot-password`)
- Email input for recovery
- Success state with confirmation message
- Resend option with timer
- Back to sign in link

### 4. **Verify Email Page** (`/auth/verify-email`)
- 6-digit OTP input with auto-tab functionality
- Paste support for codes
- Resend code with 60-second cooldown
- Success confirmation state
- Dashboard redirect on verification

### 5. **Reset Password Page** (`/auth/reset-password`)
- New password input with strength indicator
- Confirm password field
- Success confirmation state
- Sign in redirect after reset

## Shared Components

### `AuthLayout` (`/components/auth/auth-layout.tsx`)
Split layout wrapper with:
- Form section (left side)
- Hero image section (right side, desktop only)
- Responsive design (full-width on mobile)

### `AuthHeader` (`/components/auth/auth-header.tsx`)
Title and subtitle component for consistent heading styling.

### `FormError` (`/components/auth/form-error.tsx`)
Error message display with alert icon and styling.

### `PasswordStrength` (`/components/auth/password-strength.tsx`)
Real-time password strength indicator with:
- Color-coded feedback (Weak/Fair/Good/Strong)
- Progress bar visualization
- Validation criteria tracking

### `OTPInput` (`/components/auth/otp-input.tsx`)
6-digit OTP input with:
- Auto-tab to next field
- Backspace support
- Paste detection
- Numeric-only input

## Features

- **Responsive Design**: Optimized for mobile and desktop
- **Form Validation**: Client-side validation with error messages
- **Password Security**: Real-time strength indicator and matching validation
- **OTP Handling**: Auto-advancing digit entry with paste support
- **User Feedback**: Loading states and success confirmations
- **Accessibility**: Proper labels, ARIA attributes, and keyboard navigation
- **Design System**: Uses Voya color tokens and existing UI components

## Design Language

- **Color Scheme**: Coral primary (#FF6B6B), cream background (#FFFEF7)
- **Typography**: System font with 2.5rem headers, 0.875rem body
- **Layout**: Grid-based 2-column split on desktop, mobile-first responsive
- **Hero Images**: Professional carpooling-themed images for each flow

## Hero Images

- `/public/auth-hero-login.png` - People entering a car (welcoming)
- `/public/auth-hero-signup.png` - Diverse group meeting (inclusive)
- `/public/auth-hero-forgot.png` - Email notification (reassuring)
- `/public/auth-hero-verify.png` - Email verification (security)
- `/public/auth-hero-reset.png` - Password update (trust)

## Integration Notes

### To connect with backend:

1. **Login**: Replace the mock API call in `/app/auth/login/page.tsx` with your authentication service
2. **Signup**: Connect to user creation endpoint and handle email verification trigger
3. **Forgot Password**: Implement password reset email sending
4. **Verify Email**: Connect to OTP verification and token validation
5. **Reset Password**: Implement password update with token validation

### Environment Variables Needed:
- `NEXT_PUBLIC_API_URL` - Backend API endpoint
- `NEXT_PUBLIC_AUTH_CALLBACK_URL` - Redirect after successful auth

## File Structure

```
app/auth/
├── login/
│   └── page.tsx
├── signup/
│   └── page.tsx
├── forgot-password/
│   └── page.tsx
├── verify-email/
│   └── page.tsx
└── reset-password/
    └── page.tsx

components/auth/
├── auth-layout.tsx
├── auth-header.tsx
├── form-error.tsx
├── password-strength.tsx
└── otp-input.tsx
```

## Usage Examples

### Using AuthLayout:
```tsx
import { AuthLayout } from '@/components/auth/auth-layout'

<AuthLayout imageSrc="/auth-hero-login.png">
  {/* Your form content */}
</AuthLayout>
```

### Using PasswordStrength:
```tsx
import { PasswordStrength } from '@/components/auth/password-strength'

<PasswordStrength password={password} />
```

### Using OTPInput:
```tsx
import { OTPInput } from '@/components/auth/otp-input'

<OTPInput value={otp} onChange={setOtp} length={6} />
```

## Testing

All pages have been tested and verified with:
- Form validation working correctly
- Password strength indicator showing real-time feedback
- OTP input auto-tabbing between fields
- Responsive layout on desktop and mobile viewports
- Success states and error handling
- Navigation between auth flows

## Next Steps

1. Connect to your authentication backend (Better Auth, Supabase, or custom API)
2. Implement email verification and password reset services
3. Add session management and user state
4. Set up protected routes and middleware
5. Add logging and error tracking
