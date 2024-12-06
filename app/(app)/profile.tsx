import CustomButton from "@/components/atoms/CustomButton";
import CustomCheckbox from "@/components/atoms/CustomCheckbox";
import CustomText from "@/components/atoms/CustomText";
import CustomTextInput from "@/components/atoms/CustomTextInput";
import { useSession } from "@/context/auth";
import { Image } from "expo-image";
import { Redirect } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

export default function Profile() {
  const { user, logOut } = useSession();
  const [orderStatusesChecked, setOrderStatusesChecked] = useState(false);
  const [passwordChangesChecked, setPasswordChangesChecked] = useState(false);
  const [specialOffersChecked, setSpecialOffersChecked] = useState(false);

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar style="dark" />
      <ScrollView style={{flex: 1}}>
        <View style={{padding: 16, display: 'flex', flexDirection: 'column', gap: 24}}>
          <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', gap: 16}}>
            <Image style={{height: 96, width: 96}} source={user.avatar} alt='profile image' contentFit='contain' transition={250}/>
            <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', gap: 8, flex: 1}}>
              <CustomButton title="Change" />
              <CustomButton title="Remove" variant="outline" />
            </View>
          </View>

          <View style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column', gap: 16}}>
            <CustomText size="m">Personal data</CustomText>
            <View style={{display: 'flex', flexDirection: 'column', gap: 8, width: '100%'}}>
              <CustomText size="xs">Username</CustomText>
              <CustomTextInput placeholder={user.username} inputMode="text"/>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', gap: 8, width: '100%'}}>
              <CustomText size="xs">Phone number</CustomText>
              <CustomTextInput placeholder={user.telephone ? user.telephone.toString() : 'Add your phone number'} inputMode="tel"/>
            </View>
            <View style={{display: 'flex', flexDirection: 'column', gap: 8, width: '100%'}}>
              <CustomText size="xs">Email</CustomText>
              <CustomTextInput placeholder={user.email ? user.email : 'Add your email'} inputMode="email"/>
            </View>
          </View>

          <View style={{display: 'flex', flexDirection: 'column', gap: 16, width: '100%'}}>
            <CustomText size="m">Email notifications</CustomText>
            <CustomCheckbox checked={orderStatusesChecked} label="Order statuses" onPress={() => setOrderStatusesChecked(!orderStatusesChecked)} />
            <CustomCheckbox checked={passwordChangesChecked} label="Password changes" onPress={() => setPasswordChangesChecked(!passwordChangesChecked)} />
            <CustomCheckbox checked={specialOffersChecked} label="Special offers" onPress={() => setSpecialOffersChecked(!specialOffersChecked)} />
          </View>

          <View style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', gap: 8, flex: 1}}>
            <CustomButton title="Cancel" variant="outline"/>
            <CustomButton title="Save" />
          </View>

          <CustomButton title="Log out" onPress={() => logOut()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
