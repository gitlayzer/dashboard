import http from '@/utils/http';
import { awaitWrap } from '@/utils/utils';

export const getServiceList = async (cluster, namespace) => {
  let url = `/pixiu/proxy/${cluster}/api/v1/namespaces/${namespace}/services`;
  if (namespace === '全部空间') {
    url = `/pixiu/proxy/${cluster}/api/v1/services`;
  }
  const [err, result] = await awaitWrap(
    http({
      method: 'get',
      url: url,
    }),
  );
  return [result, err];
};

export const updateService = async (cluster, namespace, name, data) => {
  const [err, result] = await awaitWrap(
    http({
      method: 'put',
      url: `/pixiu/proxy/${cluster}/api/v1/namespaces/${namespace}/services/${name}`,
      data: data,
    }),
  );
  return [result, err];
};

export const getService = async (cluster, namespace, name) => {
  const [err, result] = await awaitWrap(
    http({
      method: 'get',
      url: `/pixiu/proxy/${cluster}/api/v1/namespaces/${namespace}/services/${name}`,
    }),
  );
  return [result, err];
};

export const deleteService = async (cluster, namespace, name) => {
  const [err, result] = await awaitWrap(
    http({
      method: 'delete',
      url: `/pixiu/proxy/${cluster}/api/v1/namespaces/${namespace}/services/${name}`,
    }),
  );
  return [result, err];
};

export const createService = async (cluster, namespace, data) => {
  const [err, result] = await awaitWrap(
    http({
      method: 'post',
      url: `/pixiu/proxy/${cluster}/api/v1/namespaces/${namespace}/services`,
      data: data,
    }),
  );
  return [result, err];
};

export const getServicesByLabels = async (cluster, labels) => {
  const [err, result] = await awaitWrap(
    http({
      method: 'get',
      url: `/pixiu/proxy/${cluster}/api/v1/services`,
      data: {
        labelSelector: labels.join(','),
        limit: 500,
      },
    }),
  );
  return [result, err];
};
