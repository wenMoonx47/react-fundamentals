/**
 * Shared utilities for React Fundamentals Workshop
 * Common patterns and helper functions used across exercises
 */

// Type definitions for common workshop patterns
export interface ExerciseProps {
	children?: any
	className?: string
}

export interface FormFieldProps {
	label: string
	name: string
	required?: boolean
	error?: string
}

// DOM utilities
export function createElement(tag: string, props: Record<string, any> = {}, ...children: any[]) {
	const element = document.createElement(tag)
	
	Object.keys(props).forEach(key => {
		const value = props[key]
		if (key === 'className') {
			element.className = value
		} else if (key.indexOf('on') === 0 && typeof value === 'function') {
			element.addEventListener(key.substring(2).toLowerCase(), value)
		} else {
			element.setAttribute(key, value)
		}
	})
	
	children.forEach(child => {
		if (typeof child === 'string') {
			element.appendChild(document.createTextNode(child))
		} else if (child instanceof Node) {
			element.appendChild(child)
		}
	})
	
	return element
}

// Class name utilities
export function classNames(...classes: (string | undefined | null | false)[]): string {
	return classes.filter(Boolean).join(' ')
}

// Event handler utilities
export function createEventHandler<T extends Event>(
	handler: (event: T) => void,
	preventDefault = false,
	stopPropagation = false
) {
	return (event: T) => {
		if (preventDefault) event.preventDefault()
		if (stopPropagation) event.stopPropagation()
		handler(event)
	}
}

// Form validation utilities
export function validateRequired(value: string, fieldName: string): string | null {
	return value.trim() === '' ? `${fieldName} is required` : null
}

export function validateEmail(email: string): string | null {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
	return emailRegex.test(email) ? null : 'Please enter a valid email address'
}

export function validateMinLength(value: string, minLength: number, fieldName: string): string | null {
	return value.length < minLength 
		? `${fieldName} must be at least ${minLength} characters long` 
		: null
}

// Workshop specific utilities
export function logExerciseCompletion(exerciseName: string) {
	console.log(`🎉 Exercise completed: ${exerciseName}`)
	console.log(`Time: ${new Date().toLocaleTimeString()}`)
}

export function createWorkshopLogger(exerciseName: string) {
	return {
		info: (message: string) => console.log(`[${exerciseName}] ${message}`),
		success: (message: string) => console.log(`✅ [${exerciseName}] ${message}`),
		error: (message: string) => console.error(`❌ [${exerciseName}] ${message}`),
		warn: (message: string) => console.warn(`⚠️ [${exerciseName}] ${message}`)
	}
}

// Performance utilities
export function debounce<T extends (...args: any[]) => any>(
	func: T,
	delay: number
): (...args: Parameters<T>) => void {
	let timeoutId: number | null = null
	
	return (...args: Parameters<T>) => {
		if (timeoutId) clearTimeout(timeoutId)
		timeoutId = setTimeout(() => func(...args), delay)
	}
}

export function throttle<T extends (...args: any[]) => any>(
	func: T,
	limit: number
): (...args: Parameters<T>) => void {
	let inThrottle: boolean = false
	
	return (...args: Parameters<T>) => {
		if (!inThrottle) {
			func(...args)
			inThrottle = true
			setTimeout(() => inThrottle = false, limit)
		}
	}
}

// Constants for workshop exercises
export const WORKSHOP_CONSTANTS = {
	DEBOUNCE_DELAY: 300,
	THROTTLE_LIMIT: 100,
	DEFAULT_TIMEOUT: 5000,
	ANIMATION_DURATION: 300
} as const 