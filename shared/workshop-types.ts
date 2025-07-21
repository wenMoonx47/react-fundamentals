/**
 * TypeScript definitions for React Fundamentals Workshop
 * Common types and interfaces used across exercises
 */

// Workshop exercise structure
export interface Exercise {
	id: string
	title: string
	difficulty: 'beginner' | 'intermediate' | 'advanced'
	topics: string[]
	completed?: boolean
}

// Component props commonly used in exercises
export interface BaseComponentProps {
	className?: string
	children?: any
	'data-testid'?: string
}

export interface ButtonProps extends BaseComponentProps {
	onClick?: (event: MouseEvent) => void
	disabled?: boolean
	type?: 'button' | 'submit' | 'reset'
	variant?: 'primary' | 'secondary' | 'danger'
	size?: 'small' | 'medium' | 'large'
}

export interface InputProps extends BaseComponentProps {
	type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url'
	value?: string
	defaultValue?: string
	placeholder?: string
	required?: boolean
	disabled?: boolean
	onChange?: (event: Event) => void
	onFocus?: (event: FocusEvent) => void
	onBlur?: (event: FocusEvent) => void
}

export interface FormProps extends BaseComponentProps {
	onSubmit?: (event: SubmitEvent) => void
	method?: 'get' | 'post'
	action?: string
	noValidate?: boolean
}

export interface SelectProps extends BaseComponentProps {
	value?: string
	defaultValue?: string
	multiple?: boolean
	required?: boolean
	disabled?: boolean
	onChange?: (event: Event) => void
}

// Event handler types
export type EventHandler<T extends Event = Event> = (event: T) => void
export type ClickHandler = EventHandler<MouseEvent>
export type SubmitHandler = EventHandler<SubmitEvent>
export type ChangeHandler = EventHandler<Event>
export type InputHandler = EventHandler<Event>

// Form validation types
export interface ValidationResult {
	isValid: boolean
	errors: Record<string, string>
}

export interface FormField {
	name: string
	value: string
	error?: string
	touched?: boolean
	required?: boolean
}

export interface FormState {
	fields: Record<string, FormField>
	isSubmitting: boolean
	isValid: boolean
	errors: Record<string, string>
}

// API response types
export interface ApiResponse<T = any> {
	data?: T
	error?: string
	status: number
	message?: string
}

export interface ApiError {
	message: string
	status: number
	code?: string
}

// Workshop specific types
export interface WorkshopConfig {
	exercisePath: string
	testMode: boolean
	autoSave: boolean
	theme: 'light' | 'dark' | 'auto'
}

export interface ExerciseCompletion {
	exerciseId: string
	completedAt: Date
	timeSpent: number // in milliseconds
	score?: number
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>

// React component types
export type ReactElement = any
export type ReactNode = any
export type ComponentType<P = {}> = (props: P) => ReactElement
export type FunctionComponent<P = {}> = ComponentType<P>

// CSS-in-JS types
export interface CSSProperties {
	[property: string]: string | number | undefined
}

export interface StyleObject {
	[selector: string]: CSSProperties
} 