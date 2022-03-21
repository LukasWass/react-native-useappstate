import {
	useState,
	useEffect
} from "react";
import {
	AppState,
	AppStateStatus
} from "react-native";

const index = () => {
	const [appState, setAppState] = useState<AppStateStatus | null>(null);

	const onAppStateChange = (state: AppStateStatus) => {
		setAppState(state);
	};

	useEffect(() => {
		AppState.addEventListener("change", onAppStateChange);

		return () => {
			AppState.removeEventListener("change", onAppStateChange);
		};
	}, []);

	return appState;
};

export default index;
