import MainComponent from "./main";
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'

const queryClient= new QueryClient();      // We have to create a new instance of Queryclient outside any component 

const App= ()=>{
    // We have to wrap our main component with QueryClientProvider like this.

    return <QueryClientProvider client={queryClient}> {/* We need to pass it to our main component, so that it's accessible throughout the app  */}
        <MainComponent />       
    </QueryClientProvider>
}

export default App;