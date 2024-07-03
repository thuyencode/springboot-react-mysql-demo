// Thanks to https://stackoverflow.com/a/78132377

import { Icon } from '@iconify/react'
import { Component, type ErrorInfo, type ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by ErrorBoundary:', error, errorInfo)
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className='hero flex-1'>
          <div className='hero-content'>
            <h3 className='inline-flex items-center gap-1 text-error'>
              Something went wrong{' '}
              <Icon className='text-3xl' icon={'bxs:error'} />
            </h3>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
