import { ErrorBoundary } from 'react-error-boundary'

// LAZY LOADING
// PROTECTED PAGES
const Test = () => {
    // Error Boundary
    return <>
        <div>Test</div>
        <hr />

        <ErrorBoundary fallbackRender={e => <p>something went wrong</p>}>
            <Demo />
        </ErrorBoundary>

        <hr />

        <ErrorBoundary fallbackRender={e => <p>something went wrong</p>}>
            <Dummy />
        </ErrorBoundary>
    </>

}

const Demo = () => {
    return <div>demo {x} </div>
}
const Dummy = () => {
    return <div>dummy {X}</div>
}

export default Test