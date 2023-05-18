import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'orange',
    marginVertical: 20,
  },
  scrollView: {
    paddingTop: 20,
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  titleWrapper: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
  },
  descriptionWrapper: {
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  description: {},
  space: {
    height: 100,
  },
});
