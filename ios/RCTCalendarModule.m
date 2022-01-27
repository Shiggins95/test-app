//
//  RCTCalendarModule.m
//  AwesomeProject
//
//  Created by Stephen Higgins on 21/01/2022.
//

#import <Foundation/Foundation.h>
#import "RCTCalendarModule.h"
#import <React/RCTLog.h>

@implementation RCTCalendarModule

// To export a module named RCCalendarModule (name above)
// If you wanted to rename the module you can pass a value into RCT_EXPORT_MODULE - not a string literal e.g. RCT_EXPORT_MODULE(ThisCalendar)
RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(createCalendarEvent: (NSString *)name location: (NSString *)location myCallback: (RCTResponseSenderBlock)callback)
{
  NSInteger eventId = 78;
  callback(@[@(eventId), @"This is a test"]);
  RCTLogInfo(@"Pretending to create event %@ at %@", name, location);
}

// export constants. Should also implement requiresMainQueueSetup as below
- (NSDictionary *)constantsToExport
{
  return @{@"DEFAULT_EVENT_NAME": @"New Event", @"HURRY_BOOL": @YES};
}

+(BOOL)requiresMainQueueSetup
{
  return YES;
}

// recommend AGAINST using this as it can have performance issues
//RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getName)
//{
//  return [[UIDevice currentDevice] name];
//}

@end
