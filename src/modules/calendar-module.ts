import {NativeModules} from 'react-native';

const {CalendarModule} = NativeModules;

interface CalendarInterface {
  createCalendarEvent: (
    name: string,
    location: string,
    callback: (eventId: number, test: string) => void,
  ) => void;
  getConstants: () => {DEFAULT_EVENT_NAME: string; HURRY_BOOL: boolean};
}

export default CalendarModule as CalendarInterface;
