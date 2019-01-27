
// Реализуйте саги>>>>>>> upstream/homework-nasa-rover-viewer
import { takeEvery, select, put, call } from 'redux-saga/effects';
import { fetchPhotosRequest, fetchPhotosSuccess, fetchPhotosFailure } from './actions';
import { getPhotos } from './api';
import { getApiKey } from '../Auth';

export default function* () {
    yield takeEvery(fetchPhotosRequest, fetchPhotosFlow);
}

export function* fetchPhotosFlow(action) {
    const key = yield select(getApiKey)

    const { name, sol } = action.payload;
    try {
        const { photos } = yield call(getPhotos, key, name, sol)
        const cleanedPhotos = photos.map(({ id, img_src, camera }) => ({
          id,
          img_src,
          camera
        }));  
        yield put(fetchPhotosSuccess({ name, sol, photos: cleanedPhotos }))
    } catch (error) {
        yield put(fetchPhotosFailure({ name, sol, error }))
    }
}