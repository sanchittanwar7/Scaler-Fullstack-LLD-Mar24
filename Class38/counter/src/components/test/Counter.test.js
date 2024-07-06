import { render, screen, fireEvent } from "@testing-library/react"
import Counter from "../Counter"


test("initial state check", () => {
    render(<Counter />)
    const counterText = screen.getByText('Count: 0')
    const incrementText = screen.getByText('Increment')
    const decrementText = screen.getByText('Decrement')

    expect(counterText).toBeInTheDocument()
    expect(incrementText).toBeInTheDocument()
    expect(decrementText).toBeInTheDocument()
})

test("clicking on increment will increase the value of counter by 1", () => {
    render(<Counter />)
    const incrementButton = screen.getByText("Increment")
    fireEvent.click(incrementButton)

    const counterText = screen.getByText('Count: 1')
    expect(counterText).toBeInTheDocument()
})

test("clicking on decrement will decrease the value of counter by 1 if current value is >0", () => {
    render(<Counter />)
    const incrementButton = screen.getByText("Increment")
    fireEvent.click(incrementButton)
    const decrementButton = screen.getByText("Decrement")
    fireEvent.click(decrementButton)

    const counterText = screen.getByText('Count: 0')
    expect(counterText).toBeInTheDocument()
})

test("clicking on decrement should not decrease the value of counter by 1 if current value is <= 0", () => {
    render(<Counter />)
    const decrementButton = screen.getByText("Decrement")
    fireEvent.click(decrementButton)

    const counterText = screen.getByText('Count: 0')
    expect(counterText).toBeInTheDocument()
})