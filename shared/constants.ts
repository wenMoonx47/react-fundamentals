/**
 * Constants used across React Fundamentals Workshop exercises
 */

// CSS Classes commonly used in exercises
export const CSS_CLASSES = {
	container: 'container',
	button: 'button',
	input: 'input',
	form: 'form',
	error: 'error',
	success: 'success',
	loading: 'loading',
	hidden: 'hidden',
	visible: 'visible'
} as const

// Common HTML attributes
export const HTML_ATTRIBUTES = {
	id: {
		root: 'root',
		app: 'app',
		main: 'main'
	},
	dataTestId: {
		submit: 'submit-button',
		cancel: 'cancel-button',
		form: 'test-form',
		input: 'test-input'
	}
} as const

// Color palette for consistent styling
export const COLORS = {
	primary: '#667eea',
	secondary: '#764ba2',
	success: '#10b981',
	error: '#ef4444',
	warning: '#f59e0b',
	info: '#3b82f6',
	light: '#f8fafc',
	dark: '#1e293b',
	white: '#ffffff',
	black: '#000000'
} as const

// Spacing scale
export const SPACING = {
	xs: '0.25rem',
	sm: '0.5rem',
	md: '1rem',
	lg: '1.5rem',
	xl: '2rem',
	'2xl': '3rem'
} as const

// Breakpoints for responsive design
export const BREAKPOINTS = {
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1536px'
} as const

// Animation durations
export const ANIMATIONS = {
	fast: '150ms',
	normal: '300ms',
	slow: '500ms'
} as const

// Font families
export const FONTS = {
	sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
	serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
	mono: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
} as const

// HTTP status codes commonly used in exercises
export const HTTP_STATUS = {
	OK: 200,
	CREATED: 201,
	BAD_REQUEST: 400,
	UNAUTHORIZED: 401,
	FORBIDDEN: 403,
	NOT_FOUND: 404,
	INTERNAL_SERVER_ERROR: 500
} as const

// Default messages
export const MESSAGES = {
	loading: 'Loading...',
	error: 'Something went wrong',
	success: 'Success!',
	required: 'This field is required',
	invalid: 'Please enter a valid value',
	submitted: 'Form submitted successfully'
} as const 