import { StyleSheet } from 'react-native'
import params from '../../params';

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  flagPole: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 9
  },
  flag: {
    position: 'absolute',
    height: 5,
    width: 6,
    backgroundColor: '#f22',
    marginLeft: 3
  },
  baseOne: {
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 10
  },
  baseTwo: {
    position: 'absolute',
    height: 2,
    width: 10,
    backgroundColor: '#222',
    marginLeft: 5,
    marginTop: 12
  },
  flagPoleBigger: {
    height: 28,
    width: 4,
    marginLeft: 16,
  },
  flagBigger: {
    height: 10,
    width: 14,
    marginLeft: 3,
  },
  baseOneBigger: {
    height: 4,
    width: 12,
    marginTop: 20,
    marginLeft: 12,
  },
  baseTwoBigger: {
    height: 4,
    width: 20,
    marginTop: 24,
    marginLeft: 8
  }
})

export default styles
