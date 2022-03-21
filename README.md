# react-native-useappstate
## React Native AppState hook

A hook that listens to react native AppState change event.

## Installation

```bash
npm install react-native-useappstate
```

## Usage

```typescript
import react from "react";
import {
    View,
    Text
} from "react-native";
import useAppState from "react-native-useappstate";

const App = () => {
    const appState = useAppState();

    return (
        <View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center"
			}}
		>
			<Text>
				{`Current app state: ${appState}`}
			</Text>
		</View>
    );
}

export default App;
```

## Hook

#### Returns
The hook returns an react native AppStateStatus.
<br>
```["active" | "background" | "inactive" | "unknown" | "extension" | null]```

```typescript
import { AppStateStatus } from "react-native";
```
