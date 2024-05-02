## #3 WORK HARD TRAVEL HARD APP

할 일 목록 & 여행 리스트 데이터 관리 앱

nomadcoders 2024.04 ~

#### 배우는 이론
- React Native Foundations
- Styles on React Native
- Font Icons
- Data Fetching
- Permissions
- Inputs
- Async Storage
- React Native Web

#### 구현하는 기능
- Weather App
- To Do App
- Phone Geolocation
- Address Geocoding
- Data Fetching
- Responsive Design
- User Input
- Disk Persistance

#### 패키지
- "React"
- "React Native"
- "React Native Web"
- "Open Weather API"

<br>

---

### #3.1 Touchables

버튼 컴포넌트 종류
- TouchableOpacity
- TouchableHighlight
- TouchableWithoutFeedback
- Pressable

<br>

#### TouchableOpacity

- View가 터치에 적절하게 반응하도록 하는 래퍼.
아래로 누르면 래핑된 View의 opacity가 감소하여 흐리게 표시됩니다.
- https://reactnative.dev/docs/touchableopacity
```js
<TouchableOpacity>Work</TouchableOpacity>
```
<br>

#### TouchableHighlight

- View가 터치에 적절하게 반응하도록 하는 래퍼.
아래로 누르면 래핑된 View의 background를 표시합니다.
- https://reactnative.dev/docs/touchablehighlight

1. 단순 투명도 조절 
```js
<TouchableHighlight
    activeOpacity={0} // 투명도 조절
>
    Travel
</TouchableHighlight>
```
<br>

2. 여러 속성 사용
    - onPressIn : 손가락이 영역안에 들어갈 때
    - onPressOut : 손가락이 영역에서 벗어날 때
    - onLongPress : 손가락이 영역에 들어가서 오랫동안 머무를 때
```js
<TouchableHighlight
    onPress={() => console.log('test')} // 유저가 Touchable을 눌렀다가 뗄 때 발생하는 이벤트
    underlayColor="red" // 배경 컬러 변경
    activeOpacity={0.5} // 투명도 조절
>
    Travel
</TouchableHighlight>
```
<br> 

#### TouchableWithoutFeedback
- 합당한 이유가 없는 한 사용XXX.
Press에 반응하는 모든 요소는 만졌을 때 시각적 피드백이 있어야 함.
- onPress 관련 이벤트 사용 가능. 
- UI 변화 없음.
- https://reactnative.dev/docs/touchablewithoutfeedback
```js
<TouchableWithoutFeedback>Travel</TouchableWithoutFeedback>
```
<br>

#### Pressable
- Pressable은 정의된 자식에 대한 다양한 Press 상호 작용 단계를 감지할 수 있는 핵심 구성 요소 래퍼입니다.
- 터치 시 UI 변화 없음. 커스텀 필요
- onPressIn, onPressOut, onLongPress 등 사용 가능
- delayLongPress : 얼마나 길게 누르면 반응하게 만들지 설정 가능.
- hitSlop : 요소 바깥 어디까지 탭 누르는 것을 감지할지 정하는 속성
- https://reactnative.dev/docs/pressable
```js
<Pressable>Travel</Pressable>
```

<br>

### #3.2 TextInput

키보드를 통해 앱에 텍스트를 입력하기 위한 기본 구성 요소

TextInput 사용가능한 속성 맛보기
- onFocus : 터치 시 키보드 올라오고, 텍스트 입력 준비 상태로 만들어줌. 
- onChangeText : 입력한 Text 전달 받기.
- keyboardType : 이메일, 폰번호 입력 등 알맞는 키보드 노출 시켜줌.
    - default
    - number-pad
    - decimal-pad
    - numeric
    - email-address
    - phone-pad
    - url
- returnKeyType : 키패드의 엔터(return) 모양을 변경 시켜줌.
- secureTextEntry : 비밀번호 입력 숨김 처리. ****** 형태로 입력값을 보여줌.
- multiline : 텍스트가 길 경우 여러줄로 줄바꿈 처리하고 보여줌.
- onSubmitEditing : 휴대폰에서 엔터, submit 버튼을 누르면 동작하는 이벤트

- https://reactnative.dev/docs/textinput

TextInput 사용 예시

```js
<TextInput placeholder={"Add a To Do"} style={styles.input}/>
```
<br>

1. keyboardtype 속성

- 이메일, 폰번호 입력 등 알맞는 키보드 노출
- https://reactnative.dev/docs/textinput#keyboardtype
- Keyboard Type 이미지 보기
    - https://lefkowitz.me/visual-guide-to-react-native-textinput-keyboardtype-options/
- 키보드 토글(Xcode)
    - command + k
```js
<TextInput
    keyboardType="number-pad" // 숫자키보드
    placeholder={working ? "Add a To Do" : "Where do you want to go?"}
    style={styles.input}
/>
```

<br>

2. returnkeytype 속성

- 키패드의 엔터(return) 모양을 변경 시켜줌.
- https://reactnative.dev/docs/textinput#returnkeytype

```js
<TextInput
    returnKeyType="send" // return 문구 변경
    placeholder={working ? "Add a To Do" : "Where do you want to go?"}
    style={styles.input}
/>
```
<br>

3. multiline 속성
- 텍스트가 길 경우 여러줄로 줄바꿈 처리하고 보여줌.
- https://reactnative.dev/docs/textinput#multiline

```js
<TextInput
    multuline // 여러줄 작성
    placeholder={working ? "Add a To Do" : "Where do you want to go?"}
    style={styles.input}
/>
```
<br>

4. placeholdertextcolor 속성

https://reactnative.dev/docs/textinput#placeholdertextcolor

```js
<TextInput
    placeholderTextColor="red" // placeholder 글씨 색상 변경
    placeholder={working ? "Add a To Do" : "Where do you want to go?"}
    style={styles.input}
/>
```
<br>

5. autocapitalize 속성

https://reactnative.dev/docs/textinput#autocapitalize

```js
<TextInput
    autoCapitalize={"sentnces"} // 단어의 시작을 대문자로
    placeholderTextColor="red"
    placeholder={working ? "Add a To Do" : "Where do you want to go?"}
    style={styles.input}
/>
```

6. onSubmitEditing 속성

- 휴대폰에서 엔터, submit 버튼을 누르면 호출되는 이벤트
- https://reactnative.dev/docs/textinput#onsubmitediting

```js
<TextInput
    onSubmitEditing={addToDo}
    onChangeText={onChangeText}
    returnKeyType="done"
    value={text}
    placeholder={working ? "Add a To Do" : "Where do you want to go?"}
    style={styles.input}
/>
```

<br>

### #3.3 To Dos

Hash Tables 구조로 todo 저장하기
- https://youtu.be/HraOg7W3VAM?si=DcnL0E-HzV6UdDa9

Object.assign
- 여러개의 Object를 묶어주는 메소드
- https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

사용법 예시
```js
/* 
target : 새로 만들어질 object,
source1 : 이전 object
source2 : 새로운 object
*/
Object.assign(target, ...sources);
Object.assign(target, source1, source2, source3);
```

work-hard-travel-hard-app/App.js
```js
const addToDo = () => {
    if (text === "") {
        return;
    }
    const newToDos = Object.assign({}, toDos, {
        // key : value
        [Date.now()]: { text, work: working },
    });
    // const newToDos = { ...toDos, [Date.now()]: { text, work: working } };
    setToDos(newToDos);
    console.log(toDos)
    setText("");
};
```

<br>

### #3.4 Paint To Dos ~ #3.5 Persist

todo Object에서 키값만 배열로 가져와서 view 만들어주기

work-hard-travel-hard-app/App.js
```js
 <ScrollView>
    {Object.keys(toDos).map((key) =>
        toDos[key].working === working ? ( 
            // working 값에 따라 work & travel 카테고리 나누기
            <View style={styles.toDo} key={key}>
                <Text style={styles.toDoText}>{toDos[key].text}</Text>
            </View>
        ) : null
    )}
</ScrollView>

```

<br>

AsyncStorage
- 휴대폰에 데이터 저장하기
- local storage와 비슷하게 setItem(아이템 추가), getItem(아이템 읽기)을 사용하며, await을 사용한다는 점만 다름
- 문자열만 저장할 수 있음. 객체를 문자열로 변환해서 저장(JSON.stringify() 함수 사용)
- 객체로 다시 변환하려면 JSON.parse() 함수 사용
- https://docs.expo.dev/versions/latest/sdk/async-storage/
- https://react-native-async-storage.github.io/async-storage/docs/usage/

<br>

1. #### async-storage 설치
>$ npx expo install @react-native-async-storage/async-storage

2. #### 최상단에 import문 추가
```js
import AsyncStorage from '@react-native-async-storage/async-storage';
```

3. #### await AsyncStorage.setItem

공식 예시 코드
```js
const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('my-key', jsonValue);
  } catch (e) {
    // saving error
  }
};
```
work-hard-travel-hard-app/App.js
```js
const STORAGE_KEY = "@toDos";
const saveToDos = async (toSave) => {
  try {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  } catch (e) {
    // saving error
  }
};
```

4. #### await AsyncStorage.getItem

공식 예시 코드
```js
const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('my-key');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};
```
work-hard-travel-hard-app/App.js
```js
const loadToDos = async () => {
    try {
        const s = await AsyncStorage.getItem(STORAGE_KEY);
        console.log(s);
        s !== null ? setToDos(JSON.parse(s)) : null;
    } catch (e) {
        // error reading value
  }
};
```

<br>

### #3.6 Delete

#### Expo icon
- Expo 자체 아이콘
- https://icons.expo.fyi/

work-hard-travel-hard-app/App.js
```js
import { Fontisto } from "@expo/vector-icons"; // 최상단 추가
...
<TouchableOpacity onPress={() => deleteToDo(key)}>
    <Fontisto name="trash" size={18} color={theme.grey} />
</TouchableOpacity>
```

#### todo 제거 함수 추가

work-hard-travel-hard-app/App.js
```js
const deleteToDo = (key) => {
    onPress: () => {
        const newToDos = { ...toDos };// todo 객체 복사해오기
        delete newToDos[key];// id가 같은 todo 지우기
        setToDos(newToDos);// todo 새로 교체
        saveToDos(newToDos);
    },
};
```

#### Alert
- https://reactnative.dev/docs/alert

work-hard-travel-hard-app/App.js
```js
const deleteToDo = (key) => {
    Alert.alert("Delete To Do", "Are you sure?", [
        { text: "Cancel" },
        { text: "I'm Sure", style: "destructive",// 스타일은 iOS만 가능
            onPress: () => { // 해당 문구를 눌렀을 때
                const newToDos = { ...toDos };// todo 객체 복사해오기
                delete newToDos[key];// id가 같은 todo 지우기
                setToDos(newToDos);// todo 새로 교체
                saveToDos(newToDos);// localStorage에 추가
            },
        },
    ]);
};
```

<br>

콜백함수인 이벤트 핸들러에 인자를 넘기는 코드

https://velog.io/@devjade/%EB%A6%AC%EC%95%A1%ED%8A%B8-onClick%ED%95%A8%EC%88%98%EB%A1%9C-%ED%8C%8C%EB%9D%BC%EB%AF%B8%ED%84%B0%EB%A5%BC-%EC%A0%84%EB%8B%AC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95

<br>

### #4 PUBLISHING OUR APPS

app.json / app.config.js
- app.json은 코드에 속하지 않는 앱 부분을 설정하기 위한 파일
- assets 경로의 이미지로 로고 이미지, 어플 진입 시 로딩 화면 이미지 등을 바꿀 수 있음.
- 예시
    ```js
    // work-hard-travel-hard-app/app.json
    "splash": {// 어플 진입 화면
        "image": "./assets/splash3.png",// 로고 이미지
        "resizeMode": "contain",
        "backgroundColor": "#000000"// 배경색
    },
    ```
<br>

#### Expo를 사용하지 않는 이유
- javascript/styling을 제외한 infrastructure에 접근할 수 없음.
    - ex) 블루투스와의 연결
    - aos에서는 java, ios에서는 swift로 제어 가능한 부분.
- 앱 사이즈가 무거움

<br>

### react-native eas 배포

#### 1. 최신 EAS CLI 설치
>$ npm install -g eas-cli

#### 2. expo 계정에 로그인

>$ npx expo login

>$ npx eas login

#### 3. 프로젝트 구성

>$ npx eas build:configure

#### 4. 빌드 실행 (스토어 배포용)

build가 완료되면, expo 사이트 > 생성한 프로젝트 > build 된 내 앱을 확인 가능

>$ npx eas build --platform android

>$ npx eas build --platform ios

>$ npx eas build --platform all

#### 5. 빌드 리스트 확인

>$ npx eas build:list

#### 6. 빌드 배포

>$ npx eas update

#### 7. expo 사이트 > 생성한 프로젝트 > 사이드 메뉴 맨 밑 "Settings"에서 "Project Privacy"를 `Public`으로 설정

#### 8. update가 끝나면 Website link 클릭, 사이트 우측 상단에 Preview QR 확인.

<br>

참고 url - https://docs.expo.dev/build/setup/
