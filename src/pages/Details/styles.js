import styled from 'styled-components'

export const Container = styled.View`
  flex: 1;
  background-color: #191A30;
`

export const Header = styled.View`
  z-index: 2;
  position: absolute;
  top: 5%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 14px;
`

export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  background-color: rgba(25, 26, 48, 0.8);
  border-radius: 24px;
  justify-content: center;
  align-items: center;
`

export const Banner = styled.Image`
  width: 100%;
  height: 350px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const ButtonLink = styled.TouchableOpacity`
  background-color: #E72F49;
  width: 64px;
  height: 64px;
  border-radius: 32px;
  position: absolute;
  top: 314px;
  right: 16px;
  justify-content: center;
  align-items: center;
  z-index: 2;
`

export const Title = styled.Text`
  color: #FFF;
  font-size: 22px;
  font-weight: bold;
  padding: 8px 14px;
  margin-top: 20px;
`

export const ContentArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
  justify-content: space-between;
`

export const Rate = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`

export const ListGenres = styled.FlatList`
  padding-left: 14px;
  margin: 10px 0;
  max-height: 30px;
`

export const Description = styled.Text`
  padding: 0 14px 30px;
  color: #FFF;
  line-height: 20px;
`