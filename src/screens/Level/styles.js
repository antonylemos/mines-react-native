import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0, 0.6)',
  },
  container: {
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  },
  button: {
    marginTop: 10,
    padding: 5
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#eee'
  },
  bgEasy: {
    backgroundColor: '#49b65d'
  },
  bgNormal: {
    backgroundColor: '#2765f7'
  },
  bgHard: {
    backgroundColor: '#f26337'
  }
})

export default styles
