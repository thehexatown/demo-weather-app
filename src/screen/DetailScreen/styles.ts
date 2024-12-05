import {StyleSheet} from 'react-native';
import colors from '../../assets/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLUE,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  weatherSection: {
    marginTop: 40,
    alignItems: 'center',
  },
  date: {
    fontSize: 18,
    color: '#333',
  },
  weatherDescription: {
    fontSize: 20,
    fontWeight: '600',
    marginVertical: 10,
  },
  temperature: {
    fontSize: 96,
    fontWeight: 'bold',
  },
  summarySection: {
    marginTop: 30,
    paddingHorizontal: 10,
  },
  summaryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
    lineHeight: 24,
  },
  footerSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    backgroundColor: '#00000020',
    borderRadius: 10,
    padding: 20,
  },
  infoBox: {
    alignItems: 'center',
  },
  infoText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  infoLabel: {
    fontSize: 16,
    color: '#333',
  },
  loadingView: {
    flex: 1,
    backgroundColor: colors.BLUE,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
