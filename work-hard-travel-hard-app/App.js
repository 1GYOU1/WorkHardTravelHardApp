import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
	Alert,
	ScrollView,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { theme } from "./colors";

const STORAGE_KEY = "@toDos";

export default function App() {
	const [working, setWorking] = useState(true);
	const [text, setText] = useState("");
	const [toDos, setToDos] = useState({});
	
	useEffect(() => {
		loadToDos();
	}, []);

	const travel = () => setWorking(false);
	const work = () => setWorking(true);
	const onChangeText = (payload) => setText(payload);
	const saveToDos = async (toSave) => {
		try {
		  	await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
		} catch (e) {
		  	// saving error
		}
	  };
	const loadToDos = async () => {
		try {
			const s = await AsyncStorage.getItem(STORAGE_KEY);
			console.log(s);
			s !== null ? setToDos(JSON.parse(s)) : null;
		} catch (e) {
			// error reading value
	  }
	};

	const addToDo = async () => {
		if (text === "") {
		  return;
		}
		// const newToDos = Object.assign({}, toDos, {
		//   [Date.now()]: { text, work: working },
		// });
		const newToDos = { ...toDos, [Date.now()]: { text, working }, };
		setToDos(newToDos);
		console.log(toDos)
		await saveToDos(newToDos);
		setText("");
	  };

	  const deleteToDo = (key) => {
		Alert.alert("Delete To Do", "Are you sure?", [
			{ text: "Cancel" },
			{ text: "I'm Sure", style: "destructive",// 스타일은 iOS만 가능
				onPress: () => {// 해당 문구를 눌렀을 때
					const newToDos = { ...toDos };// todo 객체 복사해오기
					delete newToDos[key];// id가 같은 todo 지우기
					setToDos(newToDos);// todo 새로 교체
					saveToDos(newToDos);// localStorage에 추가
				},
			},
		]);
	};
	return (
	<View style={styles.container}>
		<StatusBar style="light" />
		<View style={styles.header}>
			<TouchableOpacity onPress={work}>
				<Text
				style={{ ...styles.btnText, color: working ? "white" : theme.grey }}
				>
				Work
				</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={travel}>
				<Text
				style={{
					...styles.btnText,
					color: !working ? "white" : theme.grey,
				}}
				>
				Travel
				</Text>
			</TouchableOpacity>
		</View>
		<TextInput
		onSubmitEditing={addToDo}
		onChangeText={onChangeText}
		returnKeyType="done"
		value={text}
		placeholder={
			working ? "What do you have to do?" : "Where do you want to go?"
		}
		style={styles.input}
		/>
		 <ScrollView>
			{Object.keys(toDos).map((key) =>
				toDos[key].working === working ? ( 
					// working 값에 따라 work & travel 카테고리 나누기
					<View style={styles.toDo} key={key}>
						<Text style={styles.toDoText}>{toDos[key].text}</Text>
						<TouchableOpacity onPress={() => deleteToDo(key)}>
							<Fontisto name="trash" size={18} color={theme.grey} />
						</TouchableOpacity>
					</View>
				) : null
			)}
      	</ScrollView>
	</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.bg,
		paddingHorizontal: 20,
	},
	header: {
		justifyContent: "space-between",
		flexDirection: "row",
		marginTop: 100,
	},
	btnText: {
		fontSize: 38,
		fontWeight: "600",
	},
	input: {
		backgroundColor: "white",
		paddingVertical: 15,// 상하 padding
		paddingHorizontal: 20,// 좌우 padding
		borderRadius: 30,
		marginVertical: 20,
		fontSize: 18,
	},
	toDo: {
		backgroundColor: theme.toDoBg,
		marginBottom: 10,
		paddingVertical: 20,
		paddingHorizontal: 20,
		borderRadius: 15,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	toDoText: {
		color: "white",
		fontSize: 16,
		fontWeight: "600",
	},
});
