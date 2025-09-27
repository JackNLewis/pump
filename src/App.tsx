import { UserProvider } from './common/contexts/UserProvider';
import RootNav from './navigators/RootNav';

export default function App() {
    return (
        <UserProvider>
            <RootNav />
        </UserProvider>
    );
}


