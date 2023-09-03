import { createSlice } from "@reduxjs/toolkit";
import { DateTime } from "luxon";
const today = DateTime.now().toISODate();

export const ticketType = {
  paid: {
    name: "Berbayar",
  },
  free: {
    name: "Gratis",
  },
  minimumPay: {
    name: "Bayar Sesukamu",
  },
};

export const tempalteTicket = {
  name: "",
  price: 0,
  quota: 0,
  description: "",
  ticketType: "",
  sellPeriod: {
    start: "",
    end: "",
  },
};

const initialState = {
  name: "createEvent",
  userFullName: "Galih Setyawan",
  modalStatus: {
    isOpenModalCategory: false,
    isOpenModalEventDateTime: false,
    isOpenModalGetEventLocation: false,
    isOpenModalDetailTicket: false,
  },
  modal: {
    detailTicket: {
      type: "",
    },
  },
  data: {
    coverImage: "",
    organizerPhoto: "",
    formatIndex: null,
    topicIndex: null,
    tickets: [
      {
        name: "PLATINUM",
        price: 500000,
        quota: 200,
        description: "Ini Tiket Platinum untuk orang umum",
        ticketType: ticketType.paid.name,
        sellPeriod: {
          start: "2023-08-20 10:00",
          end: "2023-09-24 10:00",
        },
      },
      {
        name: "GOLD",
        price: 50000,
        quota: 200,
        description: "Ini Tiket Platinum untuk orang umum",
        ticketType: ticketType.paid.name,
        sellPeriod: {
          start: "2023-09-20 10:00",
          end: "2023-09-24 10:00",
        },
      },
    ],
    tag: [],
    isPrivate: false,
    eventTime: {
      date: {
        start: today,
        end: today,
      },
      time: {
        start: "00:00",
        end: "00:00",
      },
    },
    address: {
      name: "Stadion GBK",
      city: "Jakarta",
      placeName: "Gelora Bung Karno",
      coordinate: {
        lat: -6.218335,
        long: 106.802216,
      },
    },
    form: {
      isFullName: true,
      isEmail: true,
      isPhoneNumber: true,
      isIdentityNumber: false,
      isDob: false,
      isGender: false,
      maxPerbuy: 5,
      isOneEmailOneTransaction: false,
      isOneTicketOneData: false,
    },
    eventDescription: "",
    isTermAndCondition: true,
    termAndCondition: "",
  },
};

const createEventSlice = createSlice({
  name: "createEvent",
  initialState,
  reducers: {
    setDraftCreateEvent: (state, action) => {
      state.data = action.payload;
    },
    setCoverImage: (state, action) => {
      state.data.coverImage = action.payload;
    },
    removeCoverImage: (state) => {
      state.data.coverImage = "";
    },
    setModalCategory: (state, action) => {
      state.modalStatus.isOpenModalCategory = action.payload;
    },
    setFormatEvent: (state, action) => {
      state.data.formatIndex = action.payload;
    },
    setTopicEvent: (state, action) => {
      state.data.topicIndex = action.payload;
    },
    setEventPrivacy: (state, action) => {
      state.data.isPrivate = action.payload;
    },
    setEventTags: (state, action) => {
      state.data.tag = action.payload;
    },
    setOrganizerPhoto: (state, action) => {
      state.data.organizerPhoto = action.payload;
    },
    setModalEventDateTime: (state, action) => {
      state.modalStatus.isOpenModalEventDateTime = action.payload;
    },
    setEventStartDate: (state, action) => {
      state.data.eventTime.date.start = action.payload;
    },
    setEventEndDate: (state, action) => {
      state.data.eventTime.date.end = action.payload;
    },
    setEventStartTime: (state, action) => {
      state.data.eventTime.time.start = action.payload;
    },
    setEventEndTime: (state, action) => {
      state.data.eventTime.time.end = action.payload;
    },
    setModalGetEventLocation: (state, action) => {
      state.modalStatus.isOpenModalGetEventLocation = action.payload;
    },
    setEventAddressName: (state, action) => {
      state.data.address.name = action.payload;
    },
    setEventAddressCity: (state, action) => {
      state.data.address.city = action.payload;
    },
    setEventAddressPlaceName: (state, action) => {
      state.data.address.placeName = action.payload;
    },
    setEventAddressCoordinateLat: (state, action) => {
      state.data.address.coordinate.lat = action.payload;
    },
    setEventAddressCoordinateLong: (state, action) => {
      state.data.address.coordinate.long = action.payload;
    },
    addTicketTier: (state, action) => {
      state.data.tickets.push(action.payload);
    },
    removeTicketTier: (state, action) => {
      state.data.tickets.splice(action.payload, 1);
    },
    setModalDetileTicketStatus: (state, action) => {
      state.modalStatus.isOpenModalDetailTicket = action.payload;
    },
    setModalDetailTicketType: (state, action) => {
      state.modal.detailTicket.type = action.payload;
    },
    setFormIsFullName: (state, action) => {
      state.data.form.isFullName = action.payload;
    },
    setFormIsEmail: (state, action) => {
      state.data.form.isEmail = action.payload;
    },
    setFormIsPhoneNumber: (state, action) => {
      state.data.form.isPhoneNumber = action.payload;
    },
    setFormIsIdentityNumber: (state, action) => {
      state.data.form.isIdentityNumber = action.payload;
    },
    setFormIsDob: (state, action) => {
      state.data.form.isDob = action.payload;
    },
    setFormIsGender: (state, action) => {
      state.data.form.isGender = action.payload;
    },
    setFormMaxPerbuy: (state, action) => {
      state.data.form.maxPerbuy = action.payload;
    },
    setFormIsOneEmailOneTransaction: (state, action) => {
      state.data.form.isOneEmailOneTransaction = action.payload;
    },
    setFormIsOneTicketOneData: (state, action) => {
      state.data.form.isOneTicketOneData = action.payload;
    },
    setEventDescription: (state, action) => {
      state.data.eventDescription = action.payload;
    },
    setTermAndCondition: (state, action) => {
      state.data.termAndCondition = action.payload;
    },
    setIsTermAndCondition: (state, action) => {
      state.data.isTermAndCondition = action.payload;
    },
  },
});

export const {
  setDraftCreateEvent,
  setCoverImage,
  removeCoverImage,
  setModalCategory,
  setFormatEvent,
  setTopicEvent,
  setEventPrivacy,
  setEventTags,
  setOrganizerPhoto,
  setModalEventDateTime,
  setEventStartDate,
  setEventEndDate,
  setEventStartTime,
  setEventEndTime,
  setModalGetEventLocation,
  setEventAddressName,
  setEventAddressCity,
  setEventAddressPlaceName,
  setEventAddressCoordinateLat,
  setEventAddressCoordinateLong,
  addTicketTier,
  removeTicketTier,
  setModalDetileTicketStatus,
  setModalDetailTicketType,
  setFormIsFullName,
  setFormIsEmail,
  setFormIsPhoneNumber,
  setFormIsIdentityNumber,
  setFormIsDob,
  setFormIsGender,
  setFormMaxPerbuy,
  setFormIsOneEmailOneTransaction,
  setFormIsOneTicketOneData,
  setEventDescription,
  setTermAndCondition,
  setIsTermAndCondition,
} = createEventSlice.actions;

export default createEventSlice.reducer;
