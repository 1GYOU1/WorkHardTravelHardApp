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

버튼 컴포넌트
- TouchableOpacity : 터치한 요소를 약간 투명해지게 만듬.
- TouchableHighlight : 터치 시 여러 속성을 이용하여 style을 변경할 수 있음.
- TouchableWithoutFeedback : 화면의 가장 위에서 일어나는 탭 이벤트를 listen, 그래픽이나 다른 UI 반응을 보여주지 않음
- Pressable : TouchableWithoutFeedback 과 비슷하게 터치 시 UI 변화 X. delayLongPress, hitSlop 속성 사용 가능 (new)

<br>

TouchableOpacity 사용 예시
- https://reactnative.dev/docs/touchableopacity
```js
<TouchableOpacity>Work</TouchableOpacity>
```
<br>

TouchableHighlight 사용 예시<br>
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

3. TouchableWithoutFeedback 사용 예시
    - onPress 관련 이벤트 사용 가능. 
    - UI 변화 없음.
    - https://reactnative.dev/docs/touchablewithoutfeedback
```js
<TouchableWithoutFeedback>Travel</TouchableWithoutFeedback>
```
<br>

4. Pressable 사용 예시
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

https://reactnative.dev/docs/textinput

속성 맛보기
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

- https://reactnative.dev/docs/textinput

TextInput 사용 예시

```js
<TextInput placeholder={"Add a To Do"} style={styles.input}/>
```
<br>

1. keyboardtype 속성

    https://reactnative.dev/docs/textinput#keyboardtype

```js
<TextInput
    keyboardType="number-pad" // 숫자키보드
    placeholder={working ? "Add a To Do" : "Where do you want to go?"}
    style={styles.input}
/>
```

<br>

2. returnkeytype 속성

    https://reactnative.dev/docs/textinput#returnkeytype

```js
<TextInput
    returnKeyType="send" // return 문구 변경
    placeholder={working ? "Add a To Do" : "Where do you want to go?"}
    style={styles.input}
/>
```
<br>

3. multiline 속성

https://reactnative.dev/docs/textinput#multiline

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

<br>