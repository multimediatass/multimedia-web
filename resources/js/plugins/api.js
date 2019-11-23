import Api from '@/js/plugins/axios'

export default {
    searchUser (params) {
        return Api().get('api/tes')
    },
    addPeminjaman (params) {
        return Api().post('peminjaman/add', {
            obj: params.obj
        })
    }
}